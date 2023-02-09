import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  logIn(email: string, password: string) {
    return this.http.post<{ user: User, token: string }>(environment.API + '/log-in', { email, password });
  }

  signIn(user: User) {
    return this.http.post<User>(environment.API + '/sign-in', { user });
  }
}