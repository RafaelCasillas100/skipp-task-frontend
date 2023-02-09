import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: 'logIn.component.html'
})

export class LogInComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.userService.logIn(this.email, this.password).subscribe({
      next: ({ user, token }) => {
        this.authService.setUser(user);
        this.authService.setToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/']);
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error.message;
        this.loading = false;
      }
    })
  }
}
