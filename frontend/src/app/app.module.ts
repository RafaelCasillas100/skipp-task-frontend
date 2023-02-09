import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './services/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { LogInComponent } from './components/logIn/logIn.component';
import { ContactFormComponent } from './components/contactForm/contactForm.component';
import { HomeComponent } from './components/home/home.component';
import { ContactCardComponent } from './components/common/contactCard/contactCard.component';
import { SignInComponent } from './components/signIn/signIn.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LogInComponent,
    SignInComponent,
    ContactCardComponent,
    ContactFormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
