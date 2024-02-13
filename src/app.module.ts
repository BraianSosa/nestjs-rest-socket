import { Module } from '@nestjs/common';
import { WebsocketModule } from './websocket/websocket.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'reactive_backend',
    autoLoadModels: true
  }), WebsocketModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
