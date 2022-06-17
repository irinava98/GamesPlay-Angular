import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { Game } from '../game';
import { GameService } from '../game.service';

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

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
  }

  submitGame(){
    this.game.category=Number(this.game.category);
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
