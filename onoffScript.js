const shell = require('shelljs');


const processName = process.argv[2];
const itrCount = process.argv[3];

for(let i=0; i<itrCount; i++) {
    shell.exec(`node ${processName}`, {silent: true});
    console.log(i)
}

console.log('DONE')