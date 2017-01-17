import { RouterModule, Route} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

export const routes: Route[] = [
  {path :'login', component : LoginComponent },
  { path : 'home', component: HomeComponent,},
  { path: '',redirectTo: 'login',pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);