const validateCommand = require('@swup/cli/src/commands/validate');
let output = '';

console.log = (str) => {
    output += (`${str}\n`);
};

validateCommand.flags = {
    ...validateCommand.flags,
    findUrls: {
        ...validateCommand.flags.findUrls,
        default: 'http://swup.js.org/'
    },
    asynchronous: {
        ...validateCommand.flags.asynchronous,
        default: true,
    }
};

exports.handler = async function(event, context, callback) {
    const params = new URLSearchParams(event.body);
    const mainUrl = params.get('main_url');

    await validateCommand.run();

    process.on('exit', () => {
        callback(null, {
            statusCode: 200,
            body: output
        });
    });
}
