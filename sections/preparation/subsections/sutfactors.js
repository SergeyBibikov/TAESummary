module.exports = {
    name: "SUT Factors Influencing Test Automation",
    keyPoints:[
        {
            name:"SUT interfaces",
            pointSummary:[
                "Control interfaces",
                "Monitor interfaces",
                "High or low level",
                `A particular level automation should only be carried out
                    when this level interfaces are proved to be workng correctly`,
                "When an interface is not ready, it can be mocked or stubbed",
            ]
        },
        {
            name:"Third party software",
            pointSummary:[
                "Sometimes third party software used by SUT may require testing",
                "May require different test approach than the SUT itself"                
            ]
        },
        {
            name:"Levels of intrusion",
            pointSummary:[
                `The greater the number of changes that are required to be made to the SUT 
                specifically for automated testing, the higher the level of intrusion.`,
                "The lower the intrusion level the better"
            ]
        },
        {
            name:"Different SUT architectures",
            pointSummary:[
                "Different SUT architectures may require different test approaches (C++ vs Python)",
                "The differences may be evened out with hibrid strategy"
            ]
        },
        {
            name:"Size and complexity of the SUT",
            pointSummary:[
                "The larger the SUT the more comprehensive TAS is needed",
                "No need of a large TAS for a small SUT"
            ]
        },
        {
            name:"When the SUT does not yet exist test automation planning can start",
            pointSummary:[
                "Select automation candidates based on the requirements",
                "Think of a strategy and approach based on the candidates",
                "Propose test interfaces to be added to the SUT"
            ]
        }
    ]
}