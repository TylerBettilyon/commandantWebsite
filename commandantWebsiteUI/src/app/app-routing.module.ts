import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {HeaderComponent} from "./component/header/header.component";

//This seems to be where the routes can be mapped out!
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'header',
    component: HeaderComponent,
    data: {title: 'Header'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //These two are optional, added them cause they seem useful
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
