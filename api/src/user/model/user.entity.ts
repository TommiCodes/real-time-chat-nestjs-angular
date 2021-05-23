import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({unique: true})
  email: string;

  @Column({select: false})
  password: string;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

}