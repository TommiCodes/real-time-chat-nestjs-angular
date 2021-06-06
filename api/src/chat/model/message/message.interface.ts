import { UserI } from "src/user/model/user.interface";
import { RoomI } from "../room/room.interface";


export interface MessageI {
  id?: number;
  text: string;
  user: UserI;
  room: RoomI;
  created_at: Date;
  updated_at: Date;
}