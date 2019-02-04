import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { Message } from '../entities/message';
import { User } from '../entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  message: Message=new Message();
  messageData:any= [];
  users: any=[];
  actifUser: number;
  allMessage: any=[];
  messages: any=[];

  constructor(private messageService:MessageService, private userService:UserService, private route:Router) { }

  ngOnInit() {
   this.getAllUsers();
  }
  getAllUsers(){
  this.userService.getOtherUsers(localStorage.getItem("actifUser")).subscribe(data=>{
  this.users=data.json();
  console.log(this.users);})
  }


  SendMessage(){
    this.messageService.addMessage(localStorage.getItem("actifUser"),
    this.userService.getprofilUser(),this.message).subscribe(data=>{
      this.messageData=data.json();
      console.log(this.messageData);
      this.message.contenu="";
      this.goToUser(this.userService.getprofilUser());

    })
  }

  goToUser(user:User){
    console.log(user);
    this.userService.setprofilUser(user);
    this.actifUser=JSON.parse(localStorage.getItem("actifUser"));
    this.messageService.getAllMessaheByConversation(this.actifUser,user)
    .subscribe(data=>{
      this.allMessage=data.json();
      console.log(this.allMessage);

    });
    
  }
  deconnect(){
    localStorage.removeItem("actifUser");
    this.route.navigate(['login']);
  }  


}
