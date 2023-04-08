import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { CityComponent } from './map/city/city.component';
import { LoginComponent } from './client/login/login.component';
import { EspaceClientComponent } from './client/espace-client/espace-client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'map/:city',
    component: CityComponent,
  },
  {
    path: 'client/login',
    component: LoginComponent,
  },
  {
    path: 'client/mon-espace',
    component: EspaceClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
