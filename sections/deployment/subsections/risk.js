module.exports = {
    name: "Risk Assessment and Mitigation Strategies (deploymentwise)",
    keyPoints:[
        {
            name:"Typical technical issues include:",
            pointSummary:[
                `Too much abstraction`,
                `Data tables can become too large/complex/cumbersome`,
                `TAS dependencies on external components(e.g, libs)`,
            ]
        },
        {
            name:"Typical deployment project risks include:",
            pointSummary:[
                `Staffing issues`,
                `New SUT deliverables may cause the TAS to operate incorrectly`,
                `Delays in introducing automation`,
                `Delays in updating TAS based on the changes done to the SUT`,
                `The TAS cannot capture the (non-standard) objects it is intended to track`,
            ]
        },
        {
            name:"Potential failure points of the TAS project include:",
            pointSummary:[
                `Migration to a different environment`,
                `Deployment to the target environment`,
                `New delivery from development`,
            ]
        },
        {
            name:"Two cases of deploying a TAS",
            pointSummary:[
                `Initial deployment`,
                `Maintenance deployment`
            ]
        },
        {
            name:"First time deployment basic steps:",
            pointSummary:[
                `Define the infrastructure in which the TAS will run`,
                `Create the infrastructure for the TAS`,
                `Create a procedure for maintaining the TAS and its infrastructure`,
                `Create a procedure for maintaining the test suite that the TAS will execute`,
            ]
        },
        {
            name:"First time deployment risks include:",
            pointSummary:[
                `Total execution time of the test suite exceeds the expected time.
                <br>To mitigate:
                make sure that the test suite gets enough time to be executed`,
                `Installation and configuration issues with test environment. 
                <br>To mitigate:
                come up with an effective way to setup needed preconditions `,
            ]
        },
        {
            name:"Maintenance deployment steps:",
            pointSummary:[
                `Make an assessment of the changes in the new version of the TAS compared to the old one`,
                `Test the TAS for both new functionality and regressions`,
                `Check if the test suite needs to be adapted to the new version of the TAS`
            ]
        },
        {
            name:"Maintenance deployment risks include:",
            pointSummary:[
                `The test suite needs to change to run on the updated TAS.
                <br>To mitigate:
                make the necessary changes to the test suite`,
                `Stubs, drivers and interfaces used in testing 
                need to change to fit with the updated TAS.
                <br>To mitigate:
                make the necessary changes to the test harness`,
                `The infrastructure needs to change to accommodate the updated TAS.
                <br>To mitigate:
                perform the necessary changes and test them with the updated TAS`,
                `The updated TAS has additional defects or performance issues.
                <br>To mitigate:
                perform an analysis of risks vs benefits. If the benefits outweight,
                deploy anyway with prper release notes`,
            ]
        }
    ]
}