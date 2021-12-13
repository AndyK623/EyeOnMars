import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MarsRoverComponent} from "./mars-rover/mars-rover.component";

const routes: Routes = [
  {path: "", component: MarsRoverComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
