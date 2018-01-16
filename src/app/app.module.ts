import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponentComponent } from './components/cars-component/cars-component.component';
import { AppRoutingModule } from './app-routing.module'
import { CarServiceService } from './services/car-service.service';
import { CarFormComponentComponent } from './car-form-component/car-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponentComponent,
    CarFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
     
  ],
  providers: [CarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
