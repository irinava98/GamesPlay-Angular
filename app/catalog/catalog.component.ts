import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { GameService } from '../game.service';
import { Categories } from '../categories';
import { User } from '../user';
import { UserService } from '../user.service';
import { Roles } from '../roles';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  games:Game[]=[];


  comments:Comment[]=[];

  game=new Game('', 0,'','','',0);
  users:User[]=[];
  //category:string=Categories[this.game.category];
  categories=Categories;

  constructor(private commentService:CommentService,private gameService:GameService,private userService:UserService) { }
  

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  currentUser:User=this.users[this.users.length-1];
  comment=new Comment(1,1,'');
 
  addLike(game:Game){
    //console.log(this.users[this.users.length-1].role);
         game.likes!+=1;
         this.gameService.updateGame(game).subscribe();
    }

  publishComment(){
    this.addComment(this.comment);
  }

  getComments():void{
    this.commentService.getComments().subscribe();
  }

  getGames():void{
    this.gameService.getGames().subscribe();
  }

  addComment(newComment:Comment):void{
    //console.log(this.users[this.users.length-1]);

    this.commentService.addComment(newComment).subscribe();
  }

  deleteGame(id:number){
    this.gameService.deleteGame(id).subscribe();
  }

  isNotVisible():boolean{
    return this.users[this.users.length-1].role==Roles.ViewOnlyUser;
  }

}
