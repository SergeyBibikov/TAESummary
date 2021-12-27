module.exports = {
    name: "Introduction to gTAA",
    keyPoints:[
        {
            name:"gTAA defines :",
            pointSummary:[
               "Concept space",
               "Layers", 
               "Components", 
               "Interfaces", 
            ]
        },
        {
            name:"gTAA is vendor-neutral and allows for a structured and modular approach to building a test automation solution by:",
            pointSummary:[
                `Defining the concept space, layers, services, and interfaces of a TAS 
                    to enable the realization of TASs 
                    by in-house as well as by externally developed components`,
                "Supporting simplified components for the effective and efficient development of test automation",
                `Re-using test automation components wherever necessary`,
                "Easing the maintenance and evolution of TASs",
                "Defining the essential features for a user of a TAS"
            ]
        },
        {
            name:"TAS consists of:",
            pointSummary: [
                "Test environment (and its artifacts)",
                "Test suites (a set of test cases including test data)."
            ]
        },
        {
            name:"TAF provides:",
            pointSummary:[
                "Support for the realization of the test environment",
                "Useful tools",
                "Test harnesses",
                "Supporting libraries"
            ]
        },
        {
            name:"TAA principles to follow:",
            pointSummary:[
                "Single responsibility (component has only one reason to change)",
                "Extension (component is closed for modification, open for extension)",
                "Replacement (two components with the same functionality must be easily changeable)",
                "Component segregation (one simple specific component is better than a large general one)",
                `Dependency inversion (higher level components should not depend on the concrete implementation;
                    the TAF component should not depend on the test details)`
            ]
        },
        {
            name:"gTAA horizontal layers(can be absent from the specific TAA)",
            pointSummary:[
                "Test generation",
                "Test definition",
                "Test execution",
                "Test adaptation"
            ]
        },
        {
            name:"gTAA also has interfaces for:",
            pointSummary:[
                "Configuration management",
                "Project management",
                "Test management",
            ]
        },
        {
            name:"Test Generation Layer",
            pointSummary:[
                `Supports tools for:<br> 
                    * manual test case design<br>
                    * developing, capturing, or deriving test data<br>
                    * automatically generating test cases from models that define the SUT and/or its environment<br>`,
                `Components in this layer are used to:<br>
                * edit and navigate test suite structures <br>
                * relate test cases to test objectives or SUT requirements <br>
                * document the test design <br>`,
                `Capabilities for automated test generation include:<br>
                * ability to model the SUT, its environment, and/or the test system<br>
                * ability to define test directives and to configure/parameterize test generation algorithms<br>
                * ability to trace the generated tests back to the model (elements)`,
                `Condsiderations for implementation:<br>
                * selection of manual or automated test generation<br>
                * selection of ,for example, requirements-based, data-based, scenario-based or behavior-based test generation<br>
                * selection of test generation strategies <br>
                * choice of the test selection strategy (practical coverage criteria, weights, risk assessments, etc)<br>
                `
            ]
        },
        {
            name:"Test Definition Layer",
            pointSummary:[
                `Supports tools for:<br>
                * specifying test cases (at a high and/or low level)<br>
                * defining test data for low-level test cases<br>
                * specifying test procedures for a test case or a set of test cases<br>
                * defining test scripts for the execution of the test cases<br>
                * providing access to test libraries as needed (for example in keyword-driven approaches<br>`,
                `Components in this layer are used to:<br>
                * partition/constrain, parameterize or instantiate test data<br>
                * specify test sequences or fully-fledged test behaviors (including control statements and
                expressions), to parameterize and/or to group them<br>
                * document the test data, test cases and/or test procedures
                `,
                `Condsiderations for implementation:<br>
                * selection of data-driven, keyword-driven, pattern-based or model-driven test definition<br>
                * selection of notation for test definition <br>
                * selection of style guides and guidelines for the definition of high quality tests<br>
                * selection of test case repositories (spreadsheets, databases, files, etc.)<br>
                `,
                `Examples of notation for test definition:<br>
                * tables, state-based notation, stochastic notation,<br>
                * dataflow notation, business process notation, scenario-based notation<br>
                * spreadsheets, domain-specific test languages<br>
                * the Testing and Test Control Notation<br>
                * the UML Testing Profile (UTP)<br>`
            ]
        },
        {
            name:"Test Execution Layer",
            pointSummary:[
                `Supports tools for:<br>
                 * executing test cases automatically<br>
                 * logging the test case executions<br>
                 * reporting the test results<br>`,
                `Components in this layer provide the following capabilities:<br>
                * set up and tear down the SUT for test execution<br>
                * set up and tear down test suites (i.e., set of test cases including test data)<br>
                * configure and parameterize the test setup<br>
                * interpret both test data and test cases and transform them into executable scripts<br>
                * instrument the test system and/or the SUT for (filtered) logging of test execution and/or for fault
                injection<br>
                * analyze the SUT responses during test execution to steer subsequent test runs<br>
                * validate the SUT responses (comparison of expected and actual results) for automated test case
                execution results<br>
                * control the automated test execution in time<br>`,
                `Condsiderations for implementation:<br>
                * selection of the test execution tool<br>
                * selection of interpretation or compilation approach (depends on the tool)<br>
                * selection of the implementation paradigm (imperative, functional, object-oriented, scripting or a tool-specific technology)<br>
                * selection of helper libraries to ease test execution<br>
                `
            ]
        },
        {
            name:"Test Adaptation Layer",
            pointSummary:[
                `Supports tools for:<br>
                * controlling the test harness<br>
                * interacting with the SUT<br>
                * monitoring the SUT<br>
                * simulating or emulating the SUT environment<br>`,
                `Provides the following functionality:<br>
                * mediating between the technology-neutral test definitions and the specific technology requirements
                    of the SUT and the test devices<br>
                * applying different technology-specific adaptors to interact with the SUT<br>
                * distributing the test execution across multiple test devices/test interfaces or executing tests locally<br>`,
                `Condsiderations for implementation:<br>
                * selection of test interfaces to the SUT
                * selection of tools to stimulate and observe the test interfaces
                * selection of tools to monitor the SUT during test execution
                * selection of tools to trace test execution (e.g., including the timing of the test execution)
                `
            ]
        },
        {
            name:"Configuration management of a TAS",
            pointSummary:[
                `May include:<br>
                    * test models<br>
                    * test definitions/specifications including test data, test cases and libraries<br>
                    * test scripts<br>
                    * test execution engines and supplementary tools and components<br>
                    * test adaptors for the SUT<br>
                    * simulators and emulators for the SUT environment<br>
                    * test results and test reports<br>`,
                "Should allow easy switching between versions",
            ]
        },
        {
            name:"Project management of a TAS and test management",
            pointSummary:[
                "TAS should provide easy access to the metrics and other reports to show to the managers",
                "TAS should accept the SDLC of the SUT"
            ]
        }
    ]
}