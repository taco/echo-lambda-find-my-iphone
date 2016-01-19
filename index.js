var find = require('find-my-iphone');

exports.handler = function(event, context) {
    console.log('Attempting to find ', event.phone);

    find(process.env.ICLOUD_USERNAME, process.env.ICLOUD_PASSWORD, event.phone, function () {
        console.log('Successfully found ', event.phone);
    });
};