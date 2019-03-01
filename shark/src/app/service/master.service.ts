import { Injectable } from '@angular/core';
import { Exam } from './exam';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
 exam;
  

  constructor() { 
   
  }

  login(){
    let examConfig = {};
    this.exam = new Exam(examConfig);

  }

  logout(){

  }

  signup(){

  }

  getEnviroment(){

  }
  
  getQuestion(questionId : number){


  }
 

}
