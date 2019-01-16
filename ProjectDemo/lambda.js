let Swagger = require('swagger-client');
let result = "undefined";

exports.handler = function (event, context, callback) {

    console.log(event.image1);
    console.log(event.image2);
    console.log(event.type);

    Swagger.http({
        url: `https://apac.faceid.hyperverge.co/v1/photo/verifyPair`,
        method: 'post',
        query: {},
        headers: { "appId": "2d9288", "appKey": "506505f70970ce16988f"},
        body: `image1=${event.image1}&image2=${event.image2}&type=id`
            }).then((response) => {
                result = response
            }).catch((err) => {
                console.log(err)
            });   

    callback(null, result);
}