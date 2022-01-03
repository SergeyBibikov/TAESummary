module.exports = {
    name: "Verifying Automated Test Environment Components",
    keyPoints: [
        {
            name: "Steps to verify the components of the automated test environment:",
            pointSummary:[
                `Test tool installation, setup, configuration, and customization`,
                `Test scripts with known passes and failures`,
                `Repeatability in setup/teardown of the test environment`,
                `Configuration of the test environment and components`,
                `Connectivity against internal and external systems/interfaces`,
                `Intrusiveness of automated test tools`,
                `Framework component testing (as the TAF is a piece of software)`,
            ]
        },
        {
            name: "Levels of intrusion (low to high)",
            pointSummary: [
                `Interacting with the SUT from external interfaces (best end user simulation)`,
                `GUI level interaction`,
                `Test interfaces interaction`,
            ]
        }
    ]
}