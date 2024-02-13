import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { WebsocketService } from 'src/websocket/websocket.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly notificationService: WebsocketService, // Inyecta el servicio de notificaciones
  ) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuariosService.create(createUsuarioDto);
    this.notificationService.sendNotification('Hola desde el recurso creado');

    return usuario;
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuariosService.update(+id, updateUsuarioDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
