import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contactForm/contactForm.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/logIn/logIn.component';
import { SignInComponent } from './components/signIn/signIn.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'new-contact', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: 'update-contact/:id', component: ContactFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
