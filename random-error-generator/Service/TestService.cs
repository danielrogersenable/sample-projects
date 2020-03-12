using System;
using System.Collections.Generic;
using System.Threading;
using Microsoft.ApplicationInsights;
using Microsoft.Extensions.Logging;

namespace TestCoreConsoleApp.Service
{
    public class TestService
    {
        private readonly ILoggerFactory _loggerFactory;
        private readonly TelemetryClient _telemetryClient;

        public TestService(ILoggerFactory loggerFactory, TelemetryClient telemetryClient)
        {
            _loggerFactory = loggerFactory;
            _telemetryClient = telemetryClient;
        }

        public void Run(bool shouldBreak, bool useRandomError, int errorCount)
        {
            var logger = _loggerFactory.CreateLogger<TestService>();

            try
            {
                logger.LogTrace("This is a trace message.");
                logger.LogDebug("This is a debug message.");
                logger.LogInformation("This is an information message");
                logger.LogWarning("This is a warning message.");
                logger.LogError("This is an error message.");
                logger.LogCritical("This is a CRITICAL message!");

                if (shouldBreak)
                {
                    throw new Exception("I threw an exception, but only because you asked me to.");
                }
            }
            catch(Exception ex)
            {
                var properties = new Dictionary<string, string>
                {
                    { "Severity", "High" },
                    { "Occurrence", "0" },
                    { "Run", "delta" }
                };

                for (var i = 0; i < errorCount; i++)
                {
                    if (useRandomError)
                    {
                        ex = new Exception(RandomError());
                    }

                    logger.LogCritical($"Error occurrence - {i.ToString("D3")}");
                    properties["Occurrence"] = i.ToString("D3");

                    _telemetryClient.TrackException(ex, properties);
                    _telemetryClient.Flush();
                    Thread.Sleep(1000);
                }

                Thread.Sleep(1000);
            }
        }

        public string RandomError()
        {
            var random = new Random();

            var randomObject = ObjectList[random.Next(0, ObjectList.Count)];
            var randomVerb = VerbList[random.Next(0, VerbList.Count)];
            var randomReasonAdjective = AdjectiveList[random.Next(0, AdjectiveList.Count)];
            var randomReasonObject = ObjectList[random.Next(0, ObjectList.Count)];

            return $"The {randomObject} has {randomVerb} due to a {randomReasonAdjective} {randomReasonObject}.";
        }

        public static readonly List<string> ObjectList = new List<string>
        {
            "sprocket",
            "widget",
            "deal",
            "sheep",
            "doodad",
            "whatsit",
            "badger",
            "tractor",
            "human",
            "scheme",
            "plan",
            "organisation",
            "child",
            "pipe",
            "tap",
            "mistake",
            "spider",
            "library",
            "sandwich",
            "laptop",
            "country",
            "virus",
            "spreadsheet",
            "rebate management system",
            "desk",
            "superhero",
            "employee",
            "lion",
            "line of code",
            "attempt at refactoring",
            "racoon",
            "egg",
            "fish",
            "hammer",
            "cereal",
            "cheese",
            "knee",
            "office",
            "restaurant",
            "revolution",
            "Eygptian mummy",
            "flying bird",
            "rugby player",
            "gubbins",
            "French chef",
            "crocodile",
            "engineer",
            "hedgehog",
            "hairbrush"
        };

        public static readonly List<string> VerbList = new List<string>
        {
            "exploded",
            "broken",
            "stopped",
            "gained sentience",
            "left",
            "crashed",
            "resigned",
            "started a revolution",
            "been banned",
            "laughed in the face of danger",
            "disintegrated",
            "been discombobulated",
            "failed",
            "been implemented in JavaScript",
            "unexpectedly become French",
            "rebelled",
            "shuffled off the mortal coil",
            "joined the choir invisible",
            "joined the National Trust",
            "performed a cartwheel",
            "melted",
            "divided",
            "altered",
            "dumped",
            "launched",
            "succeeded",
            "collapsed",
            "boosted",
            "sailed",
            "hidden in a cupboard",
            "sneezed",
            "fallen down a well",
            "gone to Narnia",
            "forgotten everything",
            "been startled",
            "just generally given up",
            "abandoned hope",
            "lost the bounce from its bungee",
            "consciously uncoupled",
            "been quarantined",
            "airbrushed"
        };

        public static readonly List<string> AdjectiveList = new List<string>
        {
            "leaky",
            "broken",
            "lost",
            "radioactive",
            "damaged",
            "misplaced",
            "foolish",
            "pointless",
            "mysterious ticking",
            "cursed",
            "poisoned",
            "panicked",
            "stolen",
            "green",
            "formidable",
            "enviable",
            "unnecessary",
            "tormented",
            "demented",
            "exaggerated",
            "useful",
            "honest",
            "honourable",
            "historic",
            "yellow",
            "furry",
            "small",
            "messy",
            "garrulous",
            "smelly",
            "exquisite",
            "ruminative",
            "edible",
            "big red",
            "disrespectful",
            "insanely creepy",
            "self-centered",
            "frozen",
            "overly elaborate",
            "ornate",
            "extremely valuable",
            "unimaginative"
        };
    }
}
