import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OperaComponent} from "./components/opera/opera.component";
import {BoutiqueComponent} from "./components/boutique/boutique.component";
import {MainComponent} from "./components/main/main.component";


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'opera', component: OperaComponent},
  {path: 'boutique', component: BoutiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
