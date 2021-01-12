using System;
using System.Threading.Tasks;

namespace DockerPrinter
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var timer = DateTimeOffset.Now;

            var counter = 0;
            var max = args.Length != 0 ? Convert.ToInt32(args[0]) : -1;
            while (max == -1 || counter < max)
            {
                Console.WriteLine($"Counter: {++counter}");
                await Task.Delay(counter);
            }

            Console.WriteLine($"Total duration (ms): {(DateTimeOffset.Now - timer).TotalMilliseconds}");
        }
    }
}
