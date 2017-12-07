import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { UserdataService } from './services/userdata.service';
import { UsersComponent } from './components/users/users.component'
import { LoginComponent } from './components/login/login.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component'

const ROUTES = [
  {
    path: '', redirectTo: 'register', pathMatch: 'full'
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'airlines', component: AirlinesComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisteruserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AirlinesComponent,
    UsersComponent,
    LoginComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
