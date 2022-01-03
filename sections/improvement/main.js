const {generateSubsection} = require('../subs');
const op = require('./subsections/options');
const pl = require('./subsections/planning');

const subsections = `
<ul>
<li>${generateSubsection(op)}</li>
<li>${generateSubsection(pl)}</li>
<ul>
` 

module.exports = {
    subsections
}