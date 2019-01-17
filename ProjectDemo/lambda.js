let Swagger = require('swagger-client');
let fs = require('fs');
let request = require("request");


exports.handler = function (event, context, callback) {

    let image1 = event.image1;

    let buff = new Buffer(image1, 'base64');
    fs.writeFileSync('/tmp/image1.jpg', buff);

    let image2 = event.image2;

    let buff2 = new Buffer(image2, 'base64');
    fs.writeFileSync('/tmp/image2.jpg', buff2);


    Swagger.http({
        url: `https://apac.faceid.hyperverge.co/v1/photo/verifyPair`,
        method: 'post',
        query: {},
        headers: { "appId": "2d9288", "appKey": "506505f70970ce16988f"},
        body: `image1=%2Ftmp%2Fimage1.jpg&image2=%2Ftmp%2Fimage2.jpg&type=id`
    }).then((response) => {
        callback(null, response.body);
    }).catch((err) => {
        console.log(err);
    });


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