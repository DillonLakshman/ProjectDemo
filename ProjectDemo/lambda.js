let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://apac.faceid.hyperverge.co/v1/photo/verifyPair`,
        method: 'post',
        query: {},
        headers: {
            "appid": "2d9288",
            "appkey": "506505f70970ce16988f",
        },
        body: ''
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });

    callback(null, { "message": "Successfully executed" });
}