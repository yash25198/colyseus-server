import { Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import ChatRoom from "./chatroom.js";
import cors from "cors";

const port = process.env.PORT || 3000;

const server = new Server({
    transport: new WebSocketTransport({
        cors: cors({ origin: "*" }),      
    })
});
server.define("yash", ChatRoom);
server.listen(port);