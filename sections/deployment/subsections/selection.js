module.exports = {
    name: "Selection of Test Automation Approach and Planning of Deployment/Rollout",
    keyPoints:[
        {
            name:"Two main activities",
            pointSummary:[
                `Pilot`,
                `Deployment`,
            ]
        },
        {
            name:"Pilot steps to consider",
            pointSummary:[
                `Identify a suitable project: <br>
                *do not select a critical project<br>
                *do not select a trivial project<br>
                *involve the necessary stakeholders n the selection process<br>
                *the SUT of the pilot must be representative<br>
                `,
                `Plan the pilot:<br>
                *reserve budget and resources<br>
                *define milestones<br>
                *get management commitment<br>
                `,
                `Conduct the pilot:<br>
                *check if TAS provides the functionality as expected<br>
                *check if the TAS and the existing process support each other<br>
                `,
                `Evaluate the pilot(use all stakeholders)`,
            ]
        },
        {
            name:"Pilot objectives",
            pointSummary:[
                `Learn more detail about the TAS`,
                `See how the TAS fits with existing processes, procedures and tools`,
                `See how TAS needs to adjust to the current processes or vice a versa`,
                `Design the automation interface to match the needs of the testers`,
                `Decide on standard ways of using, managing, storing and maintaining the TAS and the test assets`,
                `Identify metrics and measurement methods for test automation in use`,
                `Cost/benefit analysis`,
                `Required skills analysis`
            ]
        },
        {
            name:"Deployment steps to consider",
            pointSummary:[
                `Identify initial target project(s)`,
                `Deploy the TAS in the selected projects`,
                `Monitor and evaluate the TAS in projects after 
                a pre-defined period`,
                `Rollout to the rest of the organization/projects`,
            ]
        },
        {
            name:"Success factors for deployment",
            pointSummary:[
                `An incremental rollout`,
                `Adapting and improving processes to fit with the use of the TAS`,
                `Providing training and coaching/mentoring for new users`,
                `Defining usage guidelines`,
                `Implementing a way to gather information about the actual use`,
                `Monitoring TAS use, benefits and costs`,
                `Providing support for the test and development teams`,
                `Gathering lessons learned from all teams`,
                `Identifying and implementing steps for improvement`
            ]
        },
        {
            name:"When is it better to deploy?",
            pointSummary:[
                `Depends greatly on the phase of development of the software project`,
                `option A: in the beginning of the project`,
                `option B: when reaching a milestone(e.g., ode freeze or the end of a sprint.)`,
                `For TAS hotfixes the deployment may be out of sync with the project stage`
            ]
        }
    ]
}