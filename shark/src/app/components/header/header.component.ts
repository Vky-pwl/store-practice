import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  master = {
    section:{},
    exam:{
      sectionList:[],
      remainingTime: 300
    }
  };
  config = {
    leftTime: this.master.exam.remainingTime,
    template: `$!h!:$!m!:$!s!`
  }
  ngOnInit() {
    this.master.exam = {
      remainingTime:300,
      sectionList : [{
        sectionName: 'Mathematics'
      },
      {
        sectionName: 'Physics'
      },{
        sectionName: 'Chemistry'
      }
    ]
    }
  }

}
