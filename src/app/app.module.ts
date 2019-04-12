import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PLATFORM_ID, APP_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {FaqComponent} from "./components/faq/faq.component";
import {BoutiqueComponent} from "./components/boutique/boutique.component";
import {HomeComponent} from "./components/home/home.component";
import {OperaComponent} from "./components/opera/opera.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainComponent} from "./components/main/main.component";
import {ConditionsComponent} from "./components/conditions/conditions.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ApartmentsComponent} from "./components/apartments/apartments.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {MatExpansionModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxPageScrollModule} from "ngx-page-scroll";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'tour-of-heroes'}),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    NgxPageScrollModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ApartmentsComponent,
    ConditionsComponent,
    AboutUsComponent,
    FaqComponent,
    ContactComponent,
    OperaComponent,
    BoutiqueComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
