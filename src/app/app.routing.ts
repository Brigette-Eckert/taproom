import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from "./employee-component/employee-component.component";
import { PatronComponentComponent } from "./patron-component/patron-component.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'patron',
    pathMatch: 'full'
  }, {
    path: 'patron',
    component: PatronComponentComponent
  },{
    path: 'employee',
    component: EmployeeComponentComponent
  }



];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
