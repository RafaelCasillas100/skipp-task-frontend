import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-navBar',
  templateUrl: 'navBar.component.html',
  styleUrls: ['navBar.component.css']
})

export class NavBarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logOut() {
    this.authService.clearUserData();
    this.router.navigate(['/log-in']);
  }
}
