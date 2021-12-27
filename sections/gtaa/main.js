const {generateSubsection} = require('../subs');
const intr = require('./subsections/introduction');
const taad = require('./subsections/taadeign');
const tasd = require('./subsections/tasdevelopment');

const subsections = `
<ul>
<li>${generateSubsection(intr)}</li>
<li>${generateSubsection(taad)}</li>
<li>${generateSubsection(tasd)}</li>
<ul>
` 

module.exports = {
    subsections
}