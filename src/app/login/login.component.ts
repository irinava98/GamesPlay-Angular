import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  user:User=new User('','','',3);

  message:string='';
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }



  login():void{
    this.userService.getUser(this.user.id!).subscribe(result=> console.log(result));
    this.user.email='';
    this.user.password='';
    
  }

  

}
