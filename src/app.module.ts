import { Module } from '@nestjs/common';
import { WebsocketModule } from './websocket/websocket.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [WebsocketModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
