import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes, Router} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarService } from './shared/car/car.service';
import {GiphyService} from './shared/giphy/giphy.service';
import { CarListComponent } from './car-list/car-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './car-edit/car-edit.component';


const appRoutes:Routes = [
  {
    path : '', redirectTo : '/car-list', pathMatch : 'full'
  },
  {
    path:'car-list', component: CarListComponent
  },
  {
    path:'car-add', component: CarEditComponent
  },
  {
    path:'car-edit/:id', component: CarEditComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent
  ],
  
  providers: [CarService,GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
