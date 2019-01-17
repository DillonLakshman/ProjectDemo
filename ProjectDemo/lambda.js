let Swagger = require('swagger-client');
let fs = require('fs');


exports.handler = function (event, context, callback) {

    let image1 = event.image1;

    let buff = new Buffer(image1, 'base64');
    fs.writeFileSync('image1.jpg', buff);

    callback(null, 'Base64 image data converted to file: stack-abuse-logo-out.png');

    if (event.method == "TOKEN") {
        Swagger.http({
            url: `https://services.apixplatform.com/api-sandbox/application/token`,
            method: 'post',
            query: {},
            headers: { "Accept": "*/*", "Content-Type": "application/json" },
            body: '{"password":"1qaz2wsx@","userName":"rwijetilleke@virtusa.com"}'
        }).then((response) => {
            callback(null, response.body);
        }).catch((err) => {
            console.log(err)
        });

    }

}