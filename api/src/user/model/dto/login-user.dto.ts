import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

}