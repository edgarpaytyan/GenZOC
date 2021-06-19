const fs = require('fs');
const plist = require('plist');

const samplePlist = plist.parse(fs.readFileSync('./data/sample.plist', 'utf8'));
const sampleJSON = JSON.stringify(samplePlist, undefined, 2);
try {
    fs.writeFileSync('./data/json/sample.json', sampleJSON, { flag: 'a+' }); // 'a+' is append mode
    console.log('Generate sample.json from sample.plist successfully');
} catch (err) {
    console.error(err);
}
