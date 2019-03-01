import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';
import { CountdownModule, Config } from 'ngx-countdown';
import { CountdownConfig } from 'ngx-countdown/src/countdown.config';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    PlaygroundComponent,
    InstructionComponent,
    MainHeaderComponent,
    SideNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
