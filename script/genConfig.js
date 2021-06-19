const fs = require('fs');
const plist = require('plist');
const src = path.resolve(__dirname, 'static/json/');
fs.readdirSync(src).forEach((file) => {
    const buildPlist = plist.build(
        fs.readFileSync(file, {
            encoding: 'utf8',
        }),
    );
    const fileName = file.replace(/\.[^/.]+$/, '');
    try {
        fs.writeFileSync(`data/${fileName}.json`, buildPlist, {
            flag: 'a+',
        });
        console.log(
            `Generate ${fileName}.plist from ${fileName}.json successfully`,
        );
    } catch (err) {
        console.log(err);
    }
});
console.log('Congratulations!!! All plist have been generated successfully');
