import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-signIn',
  templateUrl: 'signIn.component.html'
})

export class SignInComponent {
  user: User = new User();
  error: string = '';
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.userService.signIn(this.user).subscribe({
      next: () => {
        this.router.navigate(['/log-in']);
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error.message;
        this.loading = false;
      }
    })
  }
}
