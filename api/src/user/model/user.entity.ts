import { ConnectedUserEntity } from "src/chat/model/connected-user.entity";
import { RoomEntity } from "src/chat/model/room.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
  email: string;

  @Column({select: false})
  password: string;

  @ManyToMany(() => RoomEntity, room => room.users)
  rooms: RoomEntity[]

  @OneToMany(() => ConnectedUserEntity, connection => connection.user)
  connections: ConnectedUserEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
    this.username = this.username.toLowerCase();
  }

}