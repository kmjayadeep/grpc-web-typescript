"use strict";
exports.__esModule = true;
var helloworld_pb_1 = require("./helloworld_pb");
var HelloworldServiceClientPb_1 = require("./HelloworldServiceClientPb");
var client = new HelloworldServiceClientPb_1.GreeterClient("http://localhost:8080", null, null);
// simple unary call
var request = new helloworld_pb_1.HelloRequest();
request.setName("World");
client.sayHello(request, {}, function (err, response) {
    if (err) {
        console.log("Unexpected error for sayHello: code = " + err.code +
            (", message = \"" + err.message + "\""));
    }
    else {
        console.log(response.getMessage());
    }
});
