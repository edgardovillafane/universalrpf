import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textoApartamentoBoutique: string;
  public imgSource: string = '../../../assets/home/foto2.jpg';
  public nextImgSource: string = '../../../assets/home/foto3.jpg';
  public id = 2;
  public nextid = 3;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    setInterval(() => {
      this.changeImg();
    }, 5000);

    this.textoApartamentoBoutique = 'Exclusive short term rental flat in the hearth of\n' +
      '        Paris next to Bastille &Marais';
  }

  changeImg() {
    this.id++;
    this.nextid++;
    if (this.id > 6) {
      this.id = 2;
      this.nextid = 3;
    }

    this.imgSource = '../../../assets/home/foto' + this.id + '.jpg';
    this.nextImgSource = '../../../assets/home/foto' + this.nextid + '.jpg';
  }

}
