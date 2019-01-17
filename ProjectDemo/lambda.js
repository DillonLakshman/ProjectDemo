let Swagger = require('swagger-client');
let fs = require('fs');
let request = require("request");


exports.handler = function (event, context, callback) {   
   

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

    if (event.method == "getBanks") {
        Swagger.http({
            url: `https://api.mufg-apifirst.xlabs.one/bankapi/bank?size=10&page=0`,
            method: 'get',
            headers: { "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImhzYmMtYXNwc3AtZWMifQ.eyJpc3MiOiJodHRwczovL2FwaS5tdWZnLWFwaWZpcnN0LnhsYWJzLm9uZS9hcy90b2tlbi5vYXV0aDIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImZpbnRlY2giLCJhdWQiOiIyNHMyZGIzN2hkcnYycXI1ZG5vdTNyamxlNiIsInN1YiI6InVXVWlXeFYzeWkiLCJqdGkiOiI1ODdmOGIxMTUyYjRhMmJmIiwiaWF0IjoxNTQ3NzA4NDIwLCJleHAiOjE1NDgwNjg0MjB9.1sncgDxcH1RpJUYiC3rLwlgapJ1HGxZp6Q166ZI6hAbbk3xErDyTHQiryfuTXwqxA3WS2FEs71r_rLUbDN7dXA", "Accept": "application/json" },
        }).then((response) => {
            callback(null, response.body);
        }).catch((err) => {
            console.log(err)
        });

    }

    if (event.method == "createAccount") {
        Swagger.http({
            url: `https://api.mufg-apifirst.xlabs.one/accountapi/account`,
            method: 'post',
            query: {},
            headers: { 
                authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImhzYmMtYXNwc3AtZWMifQ.eyJpc3MiOiJodHRwczovL2FwaS5tdWZnLWFwaWZpcnN0LnhsYWJzLm9uZS9hcy90b2tlbi5vYXV0aDIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImZpbnRlY2giLCJhdWQiOiI0djVmaGlybnVoanZyc2hxb2dub252ZmRqIiwic3ViIjoieWdGWlhqVEdMQSIsImp0aSI6IjQ4YjRlZjYxYWRiN2M5YmYiLCJpYXQiOjE1NDc3MDg1NzIsImV4cCI6MTU0ODA2ODU3Mn0.5bINlfPvHIiRNpUTS-2TfENpNVBY6G2kAOn9PpbqCW9NLDBrkN0HBQef8NBjM0b0W8jVqjb4wttIk0ynZGJ5KA',
                accept: 'application/json',
                'content-type': 'application/json' 
            },

            body: JSON.stringify(event.account)
        }).then((response) => {
            console.log(Response.body)
            callback(null, response.body);
        }).catch((err) => {
            console.log(err)
        });
    }

}