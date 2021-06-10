import { Component, Input, OnInit } from '@angular/core';
import { MessageI } from 'src/app/model/message.interface';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message: MessageI;

  constructor() { }

  ngOnInit(): void {
  }

}
