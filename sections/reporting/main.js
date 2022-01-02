const {generateSubsection} = require('../subs');
const metr = require('./subsections/metrics');
const meas = require('./subsections/measurement');
const lo = require('./subsections/logging');
const rep = require('./subsections/reporting');

const subsections = `
<ul>
<li>${generateSubsection(metr)}</li>
<li>${generateSubsection(meas)}</li>
<li>${generateSubsection(lo)}</li>
<li>${generateSubsection(rep)}</li>
<ul>
` 

module.exports = {
    subsections
}