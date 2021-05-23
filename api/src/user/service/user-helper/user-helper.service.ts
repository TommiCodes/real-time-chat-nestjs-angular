import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/user/model/dto/create-user.dto';
import { LoginUserDto } from 'src/user/model/dto/login-user.dto';
import { UserI } from 'src/user/model/user.interface';

@Injectable()
export class UserHelperService {

  createUserDtoToEntity(createUserDto: CreateUserDto): Observable<UserI> {
    return of({
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password
    });
  }

  loginUserDtoToEntity(loginUserDto: LoginUserDto): Observable<UserI> {
    return of({
      email: loginUserDto.email,
      password: loginUserDto.password
    });
  }

}
