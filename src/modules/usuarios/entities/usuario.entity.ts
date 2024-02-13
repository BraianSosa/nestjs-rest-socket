import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'usuarios'
})
export class Usuario extends Model<Usuario>{

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id: number;


    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    username: string;
}
