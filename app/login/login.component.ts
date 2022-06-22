import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import * as CryptoJS from 'crypto-js'; 
import { Roles } from '../roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  user:User=new User('','','',3);

  message:string='';

  users:User[]=[];
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }



  login(email:string,password:string):void{
    //console.log(CryptoJS.AES.decrypt("U2FsdGVkX1/aAxEAFRd24gLPubXBlOOEi1awYmhd1+8=", 'secret key 123').toString(CryptoJS.enc.Latin1));
    
    if(this.users.find(x=>x.email==email && CryptoJS.AES.decrypt(x.password, 'secret key 123').toString(CryptoJS.enc.Latin1)==password)){
      this.message='Welcome!';
      this.user.role=Roles.RegisteredUser;
      
    }
    else{
      this.message='You have to be registered first!'
    }
    this.user.email='';
    this.user.password='';
    
  }

  

}