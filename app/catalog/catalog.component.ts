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
  isVisible:boolean=false;

  comments:Comment[]=[];

  game=new Game('', 0,'','','',0,[]);
  users:User[]=[];
  //category:string=Categories[this.game.category];
  categories=Categories;

  constructor(private commentService:CommentService,private gameService:GameService,private userService:UserService) { }


  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
    this.userService.getUsers().subscribe(users => this.users = users);
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
  }
  currentUser:User=this.users[this.users.length-1];
  comment=new Comment(1,1,'');
 
  addLike(game:Game){

         game.likes!+=1;
         this.gameService.updateGame(game).subscribe();
    }

  publishComment(gameId:number,content:string){
   
    let userid:number=this.users[this.users.length-1].id!;
    if(userid!=undefined){
        this.comment.userId=userid;
    }
  
    this.comment.gameId=gameId;
    this.comment.content=content;
    this.addComment(this.comment);
  }

  getComments():void{
    this.commentService.getComments().subscribe();
  }

  getGames():void{
    this.gameService.getGames().subscribe();
  }

  addComment(newComment:Comment):void{
    
    this.commentService.addComment(newComment).subscribe();
  }

  deleteGame(id:number){
    this.gameService.deleteGame(id).subscribe();
  }

 
 

}
