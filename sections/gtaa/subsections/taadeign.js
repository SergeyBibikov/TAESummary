module.exports = {
    name: "TAA Design",
    keyPoints:[
        {
            name:"TA approach considerations",
            pointSummary:[
               "Which activity or phase of the test process should be automated (test generation stage is unique to TA)", 
               "Which test level should be supported", 
               "Which type of test should be supported",
               "Which test role should be supported", 
               "Which software product(p.line, p.family) should be supported", 
               "Which SUT technologies should be supported", 
            ]
        },
        {
            name:"Things to take into account to design a TAA",
            pointSummary:[
               "Capture requirements needed to define an appropriate TAA", 
               "Compare and contrast different design/architecture approaches", 
               "Identify areas where abstraction can deliver benefits",
               "Understand SUT technologies and how these interconnect with the TAS", 
               "Understand the SUT environment", 
               "Time and complexity for a given testware architecture implementation", 
               "Ease of use for a given testware architecture implementation", 
            ]
        },{
            name:"Ways of automating test cases",
            pointSummary:[
                "to transform test cases directly into automated test scripts", 
                "to design test procedures and transform them into automated test scripts", 
                "to use a tool to translate test procedures into automated test scripts", 
                "to use a tool that generates automated test procedures and/or translates the test scripts directly from models" 
            ]
        },
        {
            name:"Approaches for Automating Test Cases",
            pointSummary:[
                `Capture/playback:<br>
                pros:<br>
                * easy to set up<br>
                cons:<br>
                * hard to maintain<br>
                * extremely flacky<br>
                * can't start before the SUT is ready<br>
                `,
                `Linear scripting:<br>
                pros:<br>
                * little preparation needed<br>
                * programming skills are not required most of the time<br>
                cons:<br>
                * repetition <br>
                * longer and non-modular scripts <br>
                * the effort depends on the number of steps <br>
                * requires effort to get familiar with the tool or language<br>
                `,
                `Structured scripting:<br>
                pros:<br>
                * usage of script libraries<br>
                * less effort for new tests <br>
                cons:<br>
                * larger initial effort <br>
                * programming skills required <br>
                * requires effort to manage scripts library<br>
                `,
                `Data-driven testing:<br>
                pros:<br>
                * less effort to create new tests due to control scripts <br>
                * more variations => larger coverage<br>
                * allows test analysts to specify tests via data files<br>
                cons:<br>
                * negative cases may be missed<br>
                * data files need to be managed<br>
                `,
                `Keyword-driven testing:<br>
                differences from DD-scripting:<br>
                * data files are called "test definitions"<br>
                * only one control script<br>
                * includes both data and "instructions"(keywords)
                pros:<br>
                * less effort for creating new tests <br>
                * test analysts may create tests<br>
                * tests can be defined in the terms of the high level actions<br>
                * keywords provide an abstraction <br>
                cons:<br>
                * requires a lot of effort if the tool does not support it<br>
                * requires care when deciding which keywords to implement<br>
                `,
                `Process-driven scripting:<br>
                concept: higher level abstraction 
                (small keywords vs longer procedures) <br>
                pros:<br>
                * workflow perspective <br>
                cons:<br>
                * SUT processes may be hard to grasp and describe<br>
                * requires care to implement correct processes <br>
                `,
                `Model-based testing:<br>
                pros:<br>
                * allows generating tests for different systems and technologies<br>
                * models are future-safe<br>
                * models require small changes when the SUT changes<br>
                * test design is incorporated in the test generation<br>
                cons:
                * requires a lot of expertise<br>
                * requires a lot of effort to model SUT<br>
                * requires adjustment is the test process<br>
                * not yet a mainstream<br>
                * models need to be tested and verified<br>
                `,
            ]
        },
        {
            name:"Technical considerations of the SUT",
            pointSummary:[
               "Interfaces of the SUT", 
               "SUT data", 
               "SUT configurations",
               "SUT standards and legal settings", 
               "Tools and tool environments used to develop the SUT", 
               "Test interfaces in the software product", 
            ]
        },
        {
            name: "Considerations for Development/QA Processes",
            pointSummary:[
                "Test execution control requirements",
                "Reporting requirements",
                "Role and access rights",
                "Established tool landscape",
            ]
        },
    ]
}