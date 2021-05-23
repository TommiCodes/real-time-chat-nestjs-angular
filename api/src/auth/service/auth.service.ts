import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';
import { UserI } from 'src/user/model/user.interface';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) {}

  generateJwt(user: UserI): Observable<string> {
    return from(this.jwtService.signAsync({user}));
  }

  hashPassword(password: string): Observable<string> {
    return from<string>(bcrypt.hash(password, 12));
  }

  comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
    return from(bcrypt.compare(password, storedPasswordHash));
  }


}
