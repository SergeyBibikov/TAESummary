module.exports = {
    name: "Identify Steps Needed to Implement Automation within Regression Testing",
    keyPoints: [
        {
            name: "Questions to answer before implementing regression tests automation:",
            pointSummary:[
                `How frequently should the tests be run?`,
                `What is the execution time for each test, for the regression suite?`,
                `Is there functional overlap between tests?
                Overlapping tests should be combined into smaller number of tests`,
                `Do tests share data?
                Shared date should be placed separately to avoid duplication`,
                `Are the tests dependent on each other?`,
                `What pre-conditions are required before test execution?`,
                `What % of SUT coverage do the tests represent?`,
                `Do the tests currently execute without failure?`,
                `What should happen when regression tests take too long?`
            ]
        }
    ]
}