import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ChangeComponent } from './change/change.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'change', component:ChangeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
