import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
    { path: '', component: ClassesComponent },
    { path: ':class', component: ClassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
