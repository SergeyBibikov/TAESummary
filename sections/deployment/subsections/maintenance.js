module.exports = {
    name: "Test Automation Maintenance",
    keyPoints:[
        {
            name:"Maintenance triggers",
            pointSummary:[
                `Modifications`,
                `Migration`,
                `Retirement of the system`
            ]
        },
        {
            name:"Types of maintenance",
            pointSummary:[
                `Preventive(making TAS futureproof)`,
                `Corrective(TAS failures fix)`,
                `Perfective(optimizations)`,
                `Adaptive(making TAS work with new techs and tools)`,
            ]
        },
        {
            name:"Maintenance scope depends on:",
            pointSummary:[
                `The size and complexity of the TAS`,
                `The size of the change`,
                `The risk of the change`,
            ]
        },
        {
            name:"Good practices for maintaining the TAS:",
            pointSummary:[
                `The deployment procedures and usage of the TAS must be clear and documented`,
                `The third party dependencies must be documented, together with drawbacks and known issues`,
                `The TAS must be modular, so parts of it can be easily replaced`,
                `The TAS must run in an environment that is replaceable or with replaceable components`,
                `The TAS must separate test scripts from the TAF itself`,
                `The TAS must run isolated from the development environment`,
                `The TAS together with the environment, test suite and testware artifacts must be under
                configuration management`
            ]
        },
        {
            name:"Third party components considerations:",
            pointSummary:[
                `They need to be documented and their config. must be managed`,
                `A plan is needed in case changes to these components are required`,
                `Their licenses must be taken into account`,
                `Keep them up to date`,
            ]
        },
        {
            name:"Benefits of naming standards and other conventions",
            pointSummary:[
                `TAS becomes easy to read, understand, change and maintain`,
                `Easier to introduce new people to the project`,
            ]
        },
        {
            name:"Naming standards can refer to:",
            pointSummary:[
                `variables`,
                `files`,
                `test scenarios`,
                `keywords`,
                `keyword parameters`,
            ]
        },
        {
            name:"Other conventions can refer to:",
            pointSummary:[
                `pre-requisites and post-actions for test execution`,
                `the content of the test data`,
                `the test environment`,
                `status of test execution`,
                `execution logs and reports`,
            ]
        },
        {
            name: "Documentation considerations include:",
            pointSummary: [
                `Someone has to write it`,
                `Someone has to maintain it`,
                `What needs to be documented: the design, components, 
                integrations with third parties, dependencies and deployment
                procedures`,
                `writing of documentation should be a part of the development process`,
            ]
        },
        {
            name: "Training material considerations include:",
            pointSummary: [
                "Well-written docs may be a basis to training materials",
                `The maintenance of the training material consists of initially
                writing it and then reviewing it
                periodically`,
                "Training most likely happens towards the end of a lifecycle iteration of the SUT"
            ]
        },
        {
            name: "Training material is a combination of",
            pointSummary: [
                "functional specifications of the TAS",
                "design and architecture of the TAS",
                "deployment and maintenance of the TAS",
                "usage of the TAS (user manual)",
                "practical examples and exercises",
                "tips and tricks"
            ]
        }
    ]
}