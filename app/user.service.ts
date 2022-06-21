import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from './user';
import { catchError,tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class UserService {

  private usersUrl='https://localhost:44308/user';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }


  constructor(private http:HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id:number):Observable<User>{
    const url=`${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.usersUrl,user,this.httpOptions);
  }
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.usersUrl,user,this.httpOptions);
  }

}
