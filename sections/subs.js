/**
 * @typedef {object} SubsectionContent 
 * @property {string} name
 * @property {Array.<KeyPoint>} keyPoints
 */

/**
 * @typedef {object} KeyPoint
 * @property {string} name
 * @property {Array.<string>} pointSummary
 */

/**
 * Создание подраздела
 * @param {string} parentSectionId id основного раздела
 * @param {SubsectionContent} content 
 * @returns {string} html подраздела
 */
function generateSubsection(content) {
    let keyPointsHtml = "";
    for (let i = 0; i < content.keyPoints.length; i++) {
        keyPointsHtml+=`<li>${genKeyPointHtml(content.keyPoints[i])}</li>`;
    }
    return `
    <details class="subsection">
        <summary class="subsectionsummary">${content.name}</summary>
        <ul>
        ${keyPointsHtml}
        </ul>
    </details>`;
}

function genKeyPointHtml(keyPoint) {
    let listHtml = "";
    for (let ps of keyPoint.pointSummary){
        listHtml+=`<li class="summary">${ps}</li>`
    }
    return `<details class="keypoint">
        <summary class="keypointsummary">${keyPoint.name}</summary>
        <ol>
        <div class="pointslist">
        ${listHtml}
        </div>
        <ol>
        </details>`
}

module.exports = {
    generateSubsection,
}