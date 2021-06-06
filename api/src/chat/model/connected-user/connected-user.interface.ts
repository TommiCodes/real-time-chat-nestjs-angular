import { UserI } from "src/user/model/user.interface";


export interface ConnectedUserI {
  id?: number;
  socketId: string;
  user: UserI;
}