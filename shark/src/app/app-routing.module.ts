import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { PlaygroundComponent } from './components/playground/playground.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
   path: 'playground',
   component: PlaygroundComponent 
  },
  {
    path: 'instruction',
    component: PlaygroundComponent 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
