module.exports = {
    name: "Selection of TAS Metrics",
    keyPoints: [
        {
            name:"Basic qualities:",
            pointSummary: [
                `TAS metrics are separate from the SUT metrics`,
                `TAS metrics allow TAM and TAE to track progress and
                monitor the impact of changes to the TAS`,
                `Metrics can be external(impact on other activities) and internal
                (the effectiveness and efficiency of the TAS)`,
                `Trend metrics may be more valuable than a separate metric value`
            ]
        },
        {
            name:"External TAS metrics",
            pointSummary: [
                `Automation benefits`,
                `Effort to build automated tests`,
                `Effort to analyze automated test incidents`,
                `Effort to maintain automated tests`,
                `Ratio of failures to defects`,
                `Time to execute automated tests`,
                `Number of automated test cases`,
                `Number of pass and fail results`,
                `Number of false-fail and false-pass results`,
                `Code coverage`,
            ]
        },
        {
            name:"Internal TAS metrics",
            pointSummary: [
                `Tool scripting metrics`,
                `Automation code defect density`,
                `Speed and efficiency of TAS components`
            ]
        },
        {
            name:"Possible measures of automation benefits:",
            pointSummary: [
                `Number of hours of manual test effort saved`,
                `Reduction in time to perform regression testing`,
                `Number of additional cycles of test execution achieved`,
                `Number or percentage of additional tests executed`,
                `Percentage of automated test cases related to the entire set of test cases`,
                `Increase in coverage (requirements, functionality, structural)`,
                `Number of defects found earlier because of the TAS`,
                `Number of defects found because of the TAS which would not have been found by manual testing
                (e.g., reliability defects)`,
            ]
        }
    ]
}