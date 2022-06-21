import { Component, OnInit } from '@angular/core';
import { Roles } from './roles';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Games Play';
  user:User=new User('','','',3);

  ngOnInit(): void {
    
  }

  Logout(){
      this.user.role=Roles.ViewOnlyUser;
  }
}


