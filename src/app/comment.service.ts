import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentUrl='https://localhost:44308/comment';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }

  constructor(private http:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentUrl);
  }

  getComment(id:number):Observable<Comment>{
    const url=`${this.commentUrl}/${id}`;
    return this.http.get<Comment>(url);
  }
  addComment(comment:Comment):Observable<Comment>{
    return this.http.post<Comment>(this.commentUrl,comment,this.httpOptions);
  }

}
