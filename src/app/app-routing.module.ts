import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';

const routes: Routes = [{ path: "cafes", component: CafeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
