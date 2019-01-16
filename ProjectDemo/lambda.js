let Swagger = require('swagger-client');
let request = require('request').defaults({ encoding: null });

exports.handler = function (event, context, callback) {    

    request.get('https://s3-ap-southeast-1.amazonaws.com/upload-to-s3-sample/VasuLinkedIn.jpg', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
            console.log(data);
        }
    });

    callback(null, { "message": "Successfully executed" });
}