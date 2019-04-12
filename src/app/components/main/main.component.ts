import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ){
    translate.setDefaultLang('en');
    translate.use('en');
  }
  expand = false;
  ngOnInit() {
  }
  setLanguage(lang){
    this.translate.use(lang);
  }
}
