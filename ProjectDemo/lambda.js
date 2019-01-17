let Swagger = require('swagger-client');


exports.handler = function (event, context, callback) {

    if (evet.method == "TOKEN") {
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