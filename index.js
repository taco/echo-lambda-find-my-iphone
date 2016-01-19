var find = require('find-my-iphone');

exports.handler = function(event, context) {
    console.log('Attempting to find ', event.phone);

    find(process.env.ICLOUD_USERNAME, new Buffer(process.env.ICLOUD_PASSWORD, 'base64').toString(), event.phone, function () {
        console.log('Successfully found ', event.phone);
    });
};