module.exports = {
    name: "Success Factors in Test Automation",
    keyPoints: [
        {
            name: "Test Automation Architecture (TAA)",
            pointSummary: [
                "Closely aligned with the architecture of a software product.",
                "Designed for maintainability, performance and learnability."
            ]
        },
        {
            name: "SUT testability",
            pointSummary: [
                "Should be considered as early as possible during SUT design",
                "Requires effort to increase, e.g, by adding new interfaces",
                "The testable parts of the SUT should be targeted first by automation"
            ]
        },
        {
            name: "Test automation strategy",
            pointSummary: [
                "Should be practical and consistent",
                "May vary depending on the part of the SUT",
                "May include both UI and API tests to check test results consistency"
            ]
        },
        {
            name: "Test automation framework must:",
            pointSummary: [
                "be easy to use",
                "be well documented",
                "be maintainable",
                "support a consistent approach to automating tests"
            ]
        },
        {
            name: "An easy to use and maintainable TAF qualities:",
            pointSummary: [
                `Good reporting and logging facilities: reports and logs should be full 
                    and usable by any member of the team(devs, testers, managers)`,
                "Easy troubleshooting: SUT, TAS or environment bugs recognition",
                "Test environment control for test consistency",
                "Detailed documentation",
                "Good test cases tracing",
                "Changes in the SUT require minimum changes in the TAF",
                "High automated testware reuse",
                "Tests are up-to-date and retired as needed",
                "Deployment is well planned",
                "Can recover if SUT encounters a fatal error",
            ]
        },
        {
            name: "Things to avoid to succeed:",
            pointSummary: [
                "Code sensitive to interface changes",
                "Automation sensitive to data changes",
                "Environment sensitive to context",
            ]
        },
        {
            name: "Advice:",
            pointSummary: [
                "Not all success factors can be met early on",
                `Once the TAA is in place, continuos improvement is needed to meet
                    as many factors as possible`
            ]
        }
    ],
}