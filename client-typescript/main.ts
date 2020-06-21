import { HelloRequest } from "./helloworld_pb";
import { GreeterClient } from "./HelloworldServiceClientPb";

const client = new GreeterClient("http://localhost:8080", null, null);

// simple unary call
var request = new HelloRequest();
request.setName("World");

client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.log(
      `Unexpected error for sayHello: code = ${err.code}` +
        `, message = "${err.message}"`
    );
  } else {
    console.log(response.getMessage());
  }
});
