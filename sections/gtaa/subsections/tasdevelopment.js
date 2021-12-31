module.exports = {
    name: "TAS Development",
    keyPoints:[
        
        {
            name:"Basic SDLC stages for a TAS",
            pointSummary:[
               "Analyze", 
               "Design", 
               "Develop", 
               "Test", 
               "Deploy", 
               "Evolve", 
            ]
        },
        {
            name:"TAS development specific traits",
            pointSummary:[
               "Compatibility with the SUT", 
               "Syncronization with the SUT", 
            ]
        },
        {
            name:"Compatibility between the TAS and the SUT",
            pointSummary:[
               "Process compatibility", 
               "Team compatibility(mindset, reviews, communication)", 
               "Technology compatibility(seamless interplay)", 
               "Tool compatibility", 
            ]
        },
        {
            name:"Synchronization between TAS and SUT",
            pointSummary:[
               `Synchronization of requirements:<br>
                * TAS has two types of the requirements:<br>
                  a) to it as a software<br>
                  b) to it as a testing tool of the SUT<br>
                * The second type of reqs need to be in sync
                  with the verion of the SUT<br>
                `, 
               "Synchronization of development phases",
               "Synchronization of defect tracking and confirmation testing",
               "Synchronization of SUT and TAS evolution",
               `Stages to sync:<br>
               * SUT design triggers TAS analysis<br>
               * if there is manual testing, its test deploy stage
                also support TAS analysis<br>
               * SUT test requires TAS deployment<br>`
            ]
        },
        {
            name:"Building Reuse into the TAS",
            pointSummary:[
               `Reusable TAS artifacts can nclude:<br>
               * (parts of) test models of test goals, test scenarios, test components<br>
               * (parts of) test cases, test data, test procedures or test libraries themselves<br>
               * the test engine and/or test report framework<br>
               * the adaptors to the SUT components and/or interfaces<br>`, 
               `Factors that my increase the ability for reuse:<br>
               * following TAA and updating it as needed<br>
               * good TAS documentation <br> 
               * high quality of the TAS artifacts<br>`, 
               "Requires effort to measure, demonstrate benefits and evangelize", 
            ]
        },
        {
            name:"Support for a Variety of Target Systems",
            pointSummary:[
               `Variery of target systems = test different configurations`, 
               `Different configurations may refer to:<br>
               * number and interconnection of SUT components<br>
               * SUT environments(software and hardware)<br>
               * technologies, prog. langs, OSes used to implement SUT<br>
               * libs and packages<br>
               * tools used to implement SUT<br>
               `, 
               `The ability of a TAS to test different software product configurations is determined when the TAA is defined`, 
               `Ways to handle the TAS variety and SUT variety:<br>
               * version/configuration control of both the TAS and SUT<br> 
               * TAS parametrization<br>
               `, 
            ]
        },
    ]
}