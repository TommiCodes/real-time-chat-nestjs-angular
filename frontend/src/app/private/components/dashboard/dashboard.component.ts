import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  rooms$ = this.chatService.getMyRooms();



  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.createRoom();
  }

}
