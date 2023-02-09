import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Social Network';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user) this.authService.setUser(JSON.parse(user));
    if (token) this.authService.setToken(JSON.parse(token));
  }
}
