import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/service/section';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  master = {
    section: new Section,
    exam:{
      sectionList:[]
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
