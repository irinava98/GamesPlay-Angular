import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Roles } from '../roles';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  gameCategories = Categories;
  
  game=new Game('', 0,'','','',0);
  
  comments:Comment[]=[];
  result:number=0;

  users:User[]=[];


  constructor(private gameService:GameService,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  submitGame(){
    this.game.category=Number(this.game.category);
    this.users[this.users.length-1].role=Roles.Creator;
    this.userService.updateUser(this.users[this.users.length-1]);
    this.addGame(this.game);
   
    this.game.title='';
    this.game.gameLink='';
    this.game.imageUrl='';
    this.game.summary='';
  }

  

  addGame(newGame:Game):void{
    
    this.gameService.addGame(newGame).subscribe();
  }

  

}
