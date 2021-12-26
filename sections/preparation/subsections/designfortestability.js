module.exports = {
    name: "Design for Testability and Automation.",
    keyPoints:[
        {
            name:"Design for testability parts:",
            pointSummary:[
               "Observability (insight into the system)", 
               "Control(ability)", 
               "Clearly defined architecture", 
            ]
        },
        {
            name:"Software interfaces that support testing",
            pointSummary:[
               "Spreadsheets scripting", 
               "Stubs and mocks",
               "Software interfaces (instead of real devices): help to simulate hardware failures", 
               "Interfaces for SUT state querying", 
            ]
        },
        {
            name:"Design for automation should consider that:",
            pointSummary:[
               "Compatibility with existing test tools should be established early on.",
               "Test tool compatibility with the SUT details is critical",
               "Solutions may require development of program code and calls to APIs"
            ]
        }
    ]
}