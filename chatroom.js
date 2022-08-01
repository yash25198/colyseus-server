import { Room } from "@colyseus/core";
export default class ChatRoom extends Room {
    onCreate(_options) {
        console.log("Chatroom created!");
        this.onMessage("message", (client, message) => {
            this.broadcast("message", client.id + " : " + message);
        });
    }
    onJoin(client, _options) {
        console.log("New client joined the room! id:" + client.id);
        this.broadcast("message", client.id + " joined the room!");
    }
    onLeave(client) {
        console.log("Client left the room! id:" + client.id);
        this.broadcast("message", client.id + " left the room!");
    }
    // onMessage(client, message) {
    //     this.broadcast("message", client.id + ": " + message);
    // }
    onDispose(_options) {
        console.log("Chatroom destroyed!");
    }

}