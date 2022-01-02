const objectivesSubsections = require('./sections/objectives/main').subsections;
const preparationSubsections = require('./sections/preparation/main').subsections;
const gtaaSubsections = require('./sections/gtaa/main').subsections;
const deploymentSubsections = require('./sections/deployment/main').subsections;
const reportingSubsections = require('./sections/reporting/main').subsections;
function loadStyles(){
    const fs = require('fs');
    return fs.readFileSync('style.css', {encoding:"utf-8"});
}
const head = `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
 ${loadStyles()}
</style>
<title>ISTQB TAE Summary</title>
</head>`;
const body = `
<body>
<header>
    <div class="title">ISTQB Test Automation Engineer Syllabus sections and their key points</div>
</header>
<main>
    <ul id="main-list" class="main-list">
        <li id="objectives" class="section">
            <details>
                <summary class="sectionsummary">Introduction and Objectives for Test Automation</summary>
                ${objectivesSubsections}
            </details>
        </li>
        <li id="preparation" class="section">
            <details>
                <summary class="sectionsummary">Preparing for Test Automation</summary>
                ${preparationSubsections}
            </details>
        </li>
        <li id="gtaa" class="section">
            <details>
                <summary class="sectionsummary">The Generic Test Automation Architecture</summary>
                ${gtaaSubsections}
            </details>
        </li>
        <li id="demployment" class="section">
            <details>
                <summary class="sectionsummary">Deployment Risks and Contingencies</summary>
                ${deploymentSubsections}
            </details>
        </li>
        <li id="reporting" class="section">
            <details>
                <summary class="sectionsummary">Test Automation Reporting and Metrics</summary>
                ${reportingSubsections}
            </details>
        </li>
        <li id="mantoauto" class="section">
            <details>
                <summary class="sectionsummary">Transitioning Manual Testing to an Automated Environment</summary>
            </details>
        </li>
        <li id="verification" class="section">
            <details>
                <summary class="sectionsummary">Verifying the TAS</summary>
            </details>
        </li>
        <li id="improvement" class="section">
            <details>
                <summary class="sectionsummary">Continuous Improvement</summary>
            </details>
        </li>
    </ul>
    
</main>
</body>
`;

module.exports = {
    head,
    body
}