const {generateSubsection} = require('../subs');
const purpose = require('./subsections/purpose');
const successFactors = require('./subsections/successFactors');

const subsections = `
<ul>
<li>${generateSubsection(purpose)}</li>
<li>${generateSubsection(successFactors)}</li>
<ul>
` 

module.exports = {
    subsections
}