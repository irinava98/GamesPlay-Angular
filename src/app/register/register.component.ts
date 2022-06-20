import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import * as CryptoJS from 'crypto-js';  


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  user:User=new User('','','',3);
 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.user.role=2;
    this.user.password=CryptoJS.AES.encrypt(this.user.password,'secret key 123').toString();
    this.addUser(this.user);
    this.user.username='';
    this.user.email='';
    this.user.password='';
  }

  getUsers():void{
    this.userService.getUsers().subscribe();
  }

  addUser(newUser:User):void{
    this.userService.addUser(newUser).subscribe();
  }

}
