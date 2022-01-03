module.exports = {
    name: "Criteria for Automation",
    keyPoints: [
        {
            name: "The test automation suitability criteria may include:",
            pointSummary:[
                `Frequency of use`,
                `Complexity to automate`,
                `Compatibility of tool support`,
                `Maturity of test process`,
                `Suitability of automation for the stage of the software product lifecycle`,
                `Sustainability of the automated environment`,
                `Controllability of the SUT`,
            ]
        },
        {
            name: "Areas to address before the transition to automation:",
            pointSummary: [
               `Availability of tools in the test environment for test automation`,
               `Correctness of test data and test cases`,
               `Scope of the test automation effort 
               (easily testable and critical parts should be tested first
                to show automation value)
               `,
               `Education of test team to the paradigm shift`,
               `Roles and responsibilities(
                   those with good programming skills should implement the TAF,
                   while those with the widest domain knowledge should prepare the 
                   test suites)`,
               `Cooperation between developers and test automation engineers`,
               `Parallel effort (to automate existing test scripts)`,
               `Test automation reporting`,
            ]
        }
    ]
}