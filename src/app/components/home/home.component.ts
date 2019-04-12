import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textoApartamentoBoutique: string;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {

    this.textoApartamentoBoutique = "Exclusive short term rental flat in the hearth of\n" +
      "        Paris next to Bastille &Marais"
  }

}
