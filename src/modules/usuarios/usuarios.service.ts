import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectModel(Usuario)
    private usuarioModel : typeof Usuario,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) : Promise<Usuario> {
    return await this.usuarioModel.create(createUsuarioDto);
  }

  async findAll() : Promise<Usuario[]> {
    return await this.usuarioModel.findAll();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
