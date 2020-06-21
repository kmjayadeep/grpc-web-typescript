# grpc-web example (typescript/javascript)

This repo contains a full working example of grpc-web including the server,
envoy proxy and typescript/javascript client

## Running Server with proxy

Go to server directory and run the following command to start the docker
containers using `docker-compose`

```
docker-compose up
```

The grpc server should be started along with envoy proxy which the UI can
connect to. Open `localhost:8080` to verify the same


## Running typescript/javascript client

go to `client-typescript` directory and run the following commands to start
client

```
npm install
npm start
```

The typescript compiled files are included in the folder. If you want to change
the typescript code, modify the `main.ts` file and compile using `tsc` command.
Or modify the `main.js` directly.
