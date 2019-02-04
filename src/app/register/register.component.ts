import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
submitted=false;
  user: any;

  constructor(private userService:UserService, private http:Http,private formBuilder: FormBuilder, private route:Router) {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
    })
   }


  ngOnInit() {
  }
onSubmit(){
this.submitted=true;
this.userService.addUser(this.registerForm.value).subscribe(data=>{
  this.user=data.json();
  console.log(this.user);
  this.route.navigate(['login']);
});



  }


}
