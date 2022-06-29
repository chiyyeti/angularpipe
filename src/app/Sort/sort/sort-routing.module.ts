import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortComponent } from './sort.component';

const routes: Routes = [{ path: '', component: SortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortRoutingModule { }
