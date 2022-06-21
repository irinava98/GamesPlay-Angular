import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './game';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  private gameUrl='https://localhost:44308/game';


  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }

  constructor(private http:HttpClient) { }

  getGames():Observable<Game[]>{
    return this.http.get<Game[]>(this.gameUrl);
  }

  getGame(id:number):Observable<Game>{
    const url=`${this.gameUrl}/${id}`;
    return this.http.get<Game>(url);
  }
  addGame(game:Game):Observable<Game>{
    return this.http.post<Game>(this.gameUrl,game,this.httpOptions);
  }
  updateGame(game:Game):Observable<Game>{
    return this.http.put<Game>(this.gameUrl,game,this.httpOptions);
  }
  deleteGame(id:number):Observable<Game>{
    const url=`${this.gameUrl}/${id}`;
    return this.http.delete<Game>(url,this.httpOptions);
  }
}
