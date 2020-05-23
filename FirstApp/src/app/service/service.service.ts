import { Injectable } from '@angular/core';
import { UserLogin } from '../Dto/user-login';
import { User } from '../Dto/user';
import { UserForgetPassword } from '../Dto/user-forget';
import { UserReset } from '../Dto/user-reset';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteDTO } from '../dto/notedto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  data: any;

  private url = 'http://localhost:8080/';

  public register(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/user/register', user);
  }
  public login(userlogin: UserLogin): Observable<any> {
    return this.http.post('http://localhost:8080/user/login', userlogin);
  }
  public forgot(email: any): any {
    return this.http.post<UserForgetPassword>(this.url + email, + 'forgot');
  }
  public reset(setpassword: UserReset, token: string): any {
    console.log(setpassword)
    return this.http.put('http://localhost:8080/' + 'reset/' + token, setpassword);
  }
  public addNote(addnote: NoteDTO) {
    return this.http.post("http://localhost:8080/notes/create/" + localStorage.getItem('token'), addnote);
  }
  getRequestNote(url): Observable<any> {
    return this.http.get('http://localhost:8080/notes/' + url, {
      headers: new HttpHeaders().set("jwt_token", localStorage.getItem("token")),
      responseType: 'json'
    });
  }
}