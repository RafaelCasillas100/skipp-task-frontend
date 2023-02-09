import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user: User | null = null;
  private _token: string | null = null;

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

  setUser(user: User) {
    this._user = user;
  }

  setToken(token: string) {
    this._token = token;
  }

  get isAuthenticated() {
    return !!this._user;
  }

  clearUserData() {
    this._user = null;
    this._token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}