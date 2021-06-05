import { UserEntity } from "src/user/model/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ConnectedUserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socketId: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

}