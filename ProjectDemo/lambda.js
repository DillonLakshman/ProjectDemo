let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    
    var http = require("https");

    var options = {
        "method": "POST",
        "hostname": "ind.faceid.hyperverge.co",
        "port": null,
        "path": "/v1/photo/verifyPair",
        "headers": {
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            "appid": "2d9288",
            "appkey": "506505f70970ce16988f",
            "cache-control": "no-cache",
            "postman-token": "8f2ec2f7-04f0-c64d-cfd8-263e3648ecb0"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nid\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"image1\"; filename=\"vasu2.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"image2\"; filename=\"VasuLinkedIn.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
    req.end();

    callback(null, { "message": "Successfully executed" });
}