let Swagger = require('swagger-client');
let bearer = "undefined";

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
        bearer = response.body.access_token

            Swagger.http({
            url: `https://apac.faceid.hyperverge.co/v1/photo/verifyPair`,
            method: 'post',
            query: {},
            headers: { "appId": "2d9288", "appKey": "506505f70970ce16988f"},
            body: `image1=${event.image1}&image2=${event.image2}&type=id`
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });

    }).catch((err) => {
        console.log("here 2")
    });    

    callback(null, event.type);
}