import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  signForm:FormGroup;
  connect: boolean;

  constructor(private userService:UserService,private route:Router) {
    this.signForm = new FormGroup({
      email: new FormControl(''),
       password: new FormControl('')
       
        })
     }

  ngOnInit() { 
  }

  doConnect(){
 this.userService.getUsers().subscribe(data=>{
   this.users=data.json();
  for(let i=0;i<=this.users.length;i++){
    if(this.users[i].email==this.signForm.value.email && this.users[i].password==this.signForm.value.password)
    {  this.userService.setActifUser(this.users[i]);
      this.connect=true;
      localStorage.setItem("actifUser",this.users[i].id);
       this.route.navigate(['conversation']);
       
      }

    
    }
 
});
  }

  



 
}
