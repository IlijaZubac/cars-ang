import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponentComponent } from './components/cars-component/cars-component.component';
import { CarFormComponentComponent } from './car-form-component/car-form-component.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponentComponent
  },
  {
    path: 'add', 
    component: CarFormComponentComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
  
   

  ],
  exports: [
    RouterModule,
     
  ]
})
export class AppRoutingModule {}
