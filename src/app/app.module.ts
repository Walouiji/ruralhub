import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { CityComponent } from './map/city/city.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatDividerModule} from '@angular/material/divider';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './client/login/login.component';
import { EspaceClientComponent } from './client/espace-client/espace-client.component';
import { SingleMarketComponent } from './components/single-market/single-market.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    CityComponent,
    ToolbarComponent,
    LoginComponent,
    EspaceClientComponent,
    SingleMarketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
