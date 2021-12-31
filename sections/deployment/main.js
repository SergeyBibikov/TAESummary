const {generateSubsection} = require('../subs');
const sel = require('./subsections/selection');
const risk = require('./subsections/risk');
const maint = require('./subsections/maintenance');

const subsections = `
<ul>
<li>${generateSubsection(sel)}</li>
<li>${generateSubsection(risk)}</li>
<li>${generateSubsection(maint)}</li>
<ul>
` 

module.exports = {
    subsections
}