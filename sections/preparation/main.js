const {generateSubsection} = require('../subs');
const sutf = require('./subsections/sutfactors');
const ev = require('./subsections/toolevaluation');
const des = require('./subsections/designfortestability');

const subsections = `
<ul>
<li>${generateSubsection(sutf)}</li>
<li>${generateSubsection(ev)}</li>
<li>${generateSubsection(des)}</li>
<ul>
` 

module.exports = {
    subsections
}