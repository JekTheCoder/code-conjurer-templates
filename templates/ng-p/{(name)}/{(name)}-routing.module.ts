import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { {(name|capitalize_all)}Component } from './{(name)}.component';

const routes: Routes = [
  {
    path: '',
    component: {(name|capitalize_all)}Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class {(name|capitalize_all)}RoutingModule {}
