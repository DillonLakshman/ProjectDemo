let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    console.log(event.image1);
    console.log(event.image2);
    console.log(event.type);

    Swagger.http({
        url: `https://services.apixplatform.com/api-sandbox/application/token`,
        method: 'post',
        query: {},
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: '{"password": "1qaz2wsx@","userName": "rwijetilleke@virtusa.com"}'
    }).then((response) => {
        console.log("here");
    }).catch((err) => {
        console.log("here 2")
    });


    callback(null, event.type);
}