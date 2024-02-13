import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server: Server;

    handleConnection(client: any, ...args: any[]) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: any) {
        console.log(`Client disconnect: ${client.id}`)
    }

    @SubscribeMessage('mensaje')
    handleMessage(@MessageBody() data: any) {
        console.log(data);
        this.server.emit('mensaje-server', `Mensaje del grupo: ${data}`);
    }

}