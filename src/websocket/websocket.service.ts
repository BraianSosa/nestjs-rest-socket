import { Injectable } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';

@Injectable()
export class WebsocketService {
  constructor(private websocketGateway: WebsocketGateway) {}

  sendNotification(message: string) {
    this.websocketGateway.server.emit('notification', message);
  }
}
