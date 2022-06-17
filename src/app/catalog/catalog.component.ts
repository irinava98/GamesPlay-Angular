import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { GameService } from '../game.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  games:Game[]=[];


  comments:Comment[]=[];

  game=new Game('', 0,'','','',0);
  //category:string=Categories[this.game.category];
  categories=Categories;
  comment=new Comment(1,1,1,'');
  constructor(private commentService:CommentService,private gameService:GameService) { }
  
 

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }
  addLike(){
    if(this.game.likes!=undefined)
    {
      this.game.likes+=1;
    }

    console.log(this.game.likes);
   
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
    this.commentService.addComment(newComment).subscribe();
  }

}
