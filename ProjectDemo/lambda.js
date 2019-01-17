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


    var options = {
        method: 'POST',
        url: 'https://apac.faceid.hyperverge.co/v1/photo/verifyPair',
        headers: { appkey: '506505f70970ce16988f', appid: '2d9288' },
        formData: { image1: fs.readFile('/tmp/image1.jpg'), image2: fs.readFile('/tmp/image2.jpg'), type: 'id' }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });

    // Swagger.http({
    //     url: `https://api.apixplatform.com/facematch/1.0/v1/photo/verifyPair`,
    //     method: 'POST',
    //     headers: { appkey: '506505f70970ce16988f', appid: '2d9288' },
    //     formData: '{ image1: "asdasd", image2: "asdasdasd", type: "id" }'
    // }).then((response) => {
    //     console.log(response);
    // }).catch((err) => {
    //     // error handling goes here
    // });


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