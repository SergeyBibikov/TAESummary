const {generateSubsection} = require('../subs');
const crit = require('./subsections/criteria');
const st = require('./subsections/steps');
const newf = require('./subsections/newfeature');
const conf = require('./subsections/confirmation');

const subsections = `
<ul>
<li>${generateSubsection(crit)}</li>
<li>${generateSubsection(st)}</li>
<li>${generateSubsection(newf)}</li>
<li>${generateSubsection(conf)}</li>
<ul>
` 

module.exports = {
    subsections
}