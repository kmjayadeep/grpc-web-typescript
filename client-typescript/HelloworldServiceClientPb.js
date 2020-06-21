"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */
exports.__esModule = true;
exports.GreeterClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = require("grpc-web");
var helloworld_pb_1 = require("./helloworld_pb");
var GreeterClient = /** @class */ (function () {
    function GreeterClient(hostname, credentials, options) {
        this.methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(helloworld_pb_1.HelloReply, function (request) {
            return request.serializeBinary();
        }, helloworld_pb_1.HelloReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    GreeterClient.prototype.sayHello = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/helloworld.Greeter/SayHello', request, metadata || {}, this.methodInfoSayHello, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/helloworld.Greeter/SayHello', request, metadata || {}, this.methodInfoSayHello);
    };
    return GreeterClient;
}());
exports.GreeterClient = GreeterClient;
