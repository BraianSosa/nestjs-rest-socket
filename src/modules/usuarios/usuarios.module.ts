import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { WebsocketModule } from 'src/websocket/websocket.module';

@Module({
  imports: [SequelizeModule.forFeature([Usuario]), WebsocketModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})

export class UsuariosModule {}
