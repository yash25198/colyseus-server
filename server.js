import { Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import ChatRoom from "./chatroom.js";

const port = process.env.PORT || 8080;

const server = new Server({
    transport: new WebSocketTransport()
});
server.define("yash", ChatRoom);
server.listen(port);