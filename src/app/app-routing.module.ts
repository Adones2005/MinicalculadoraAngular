import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CalcComponentComponent } from './calc-component/calc-component.component';

const routes:Routes=[
  {path:'',component:HomeComponentComponent},
  {path:'calculadora',component:CalcComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
