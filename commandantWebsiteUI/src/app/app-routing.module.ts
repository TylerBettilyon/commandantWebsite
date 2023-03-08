import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {HeaderComponent} from "./component/header/header.component";

//This seems to be where the routes can be mapped out!
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'LandingPage'}
  },
  {
    path: 'welcome',
    component: HomeComponent,
    data: {title: 'Welcome'}
  },
  {
    path: 'worship',
    component: HeaderComponent,
    data: {title: 'Worship'}
  },
  {
    path: 'about',
    component: HomeComponent,
    data: {title: 'About'}
  },
  {
    path: 'reviews',
    component: HeaderComponent,
    data: {title: 'Reviews'}
  },
  {
    path: 'protocol',
    component: HomeComponent,
    data: {title: 'Protocol'}
  },
  {
    path: 'scheduling',
    component: HeaderComponent,
    data: {title: 'scheduling'}
  },
  {
    path: 'commandments',
    component: HomeComponent,
    data: {title: 'commandments'}
  },
  {
    path: 'expectations',
    component: HeaderComponent,
    data: {title: 'expectations'}
  },
  {
    path: 'covid-protocol',
    component: HeaderComponent,
    data: {title: 'Covid-Protocol'}
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
