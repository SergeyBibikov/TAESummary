const {generateSubsection} = require('../subs');
const envir = require('./subsections/envir');
const suite = require('./subsections/suite');

const subsections = `
<ul>
<li>${generateSubsection(envir)}</li>
<li>${generateSubsection(suite)}</li>
<ul>
` 

module.exports = {
    subsections
}