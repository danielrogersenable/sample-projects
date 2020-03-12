using Microsoft.Extensions.Logging;

namespace TestCoreConsoleApp.StartupExtensions
{
    public static class LoggingExtensions
    {
        public static void ConfigureCustomLogging(this ILoggingBuilder builder)
        {
            builder.AddConsole();
            builder.AddEventLog();
        }
    }
}
