const fs = require('fs');
const {head, body} = require('./base'); 


fs.writeFileSync("index.html", genIndex([head,body]));



function genIndex(parts) {
    let content = "";
    for (const part of parts){
        content += part;
    }
    return `
<!DOCTYPE html>
<html>${content}
</html>`;
}