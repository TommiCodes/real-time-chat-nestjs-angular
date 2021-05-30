import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { tokenGetter } from 'src/app/app.module';

const config: SocketIoConfig = {
  url: 'http://localhost:3000', options: {
    extraHeaders: {
      Authorization: tokenGetter()
    }
  }
};

@Injectable({providedIn: 'root'})
export class CustomSocket extends Socket {
  constructor() {
    super(config)
  }
}