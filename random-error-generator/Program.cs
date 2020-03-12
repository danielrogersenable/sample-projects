using System;
using System.Threading;
using Microsoft.ApplicationInsights.Channel;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TestCoreConsoleApp.Service;

namespace TestCoreConsoleApp
{
    class Program
    {
        public static void Main(string[] args)
        {
            using (var channel = new InMemoryChannel())
            {
                var configuration = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: false)
                    .Build();

                using (var serviceProvider = ConfigureService(configuration, channel))
                {
                    Console.WriteLine("Do you want this to break? Y/N");
                    var foo = Console.ReadLine();

                    var useRandomError = false;
                    int errorCount = 0;

                    var shouldBreak = foo == "Y";
                    if (shouldBreak) {
                        Console.WriteLine("Fair enough, we'll break in a bit");

                        Console.WriteLine("Should we use random errors?");
                        var shouldWe = Console.ReadLine();

                        useRandomError = string.Equals(shouldWe, "Y", StringComparison.OrdinalIgnoreCase);
                        if (useRandomError)
                        {
                            Console.WriteLine("Hooray! Random errors!");
                        }
                        else
                        {
                            Console.WriteLine("Boring...");
                        }

                        Console.WriteLine("How many errors should we generate?");

                        var howManyErrorsString = Console.ReadLine();

                        errorCount = int.Parse(howManyErrorsString);
                    }
                    else
                    {
                        Console.WriteLine("Suit yourself, we won't break this time");
                    }

                    serviceProvider.GetService<TestService>().Run(shouldBreak, useRandomError, errorCount);
                }

                Console.WriteLine("Hello World!");

                channel.Flush();
                Thread.Sleep(1000);
            }
        }

        private static ServiceProvider ConfigureService(IConfigurationRoot configuration, InMemoryChannel channel)
        {
            var services = new ServiceCollection()
                .Configure<TelemetryConfiguration>((config) =>
                {
                    config.TelemetryChannel = channel;
                })
                .AddLogging(builder =>
                {
                    var consoleEnabled = configuration.GetValue<bool>("Console:Enabled");

                    if (consoleEnabled)
                    {
                        builder.AddConsole();
                    }

                    var applicationInsightsInstrumentationKey = configuration.GetValue<string>("ApplicationInsights:InstrumentationKey");

                    if (!string.IsNullOrWhiteSpace(applicationInsightsInstrumentationKey))
                    {
                        builder.AddApplicationInsights(applicationInsightsInstrumentationKey);
                    }
                })
                .AddScoped<TestService>();

            services.AddApplicationInsightsTelemetryWorkerService();

            return services.BuildServiceProvider();
        }
    }
}
