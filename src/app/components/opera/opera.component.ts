import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-opera',
  templateUrl: './opera.component.html',
  styleUrls: ['./opera.component.css']
})
export class OperaComponent implements OnInit {

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
