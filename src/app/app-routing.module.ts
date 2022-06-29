import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'filter',
    loadChildren: () =>
      import('./Filter/filter/filter.module').then((m) => m.FilterModule),
  },
  {
    path: 'sort',
    loadChildren: () =>
      import('./Sort/sort/sort.module').then((m) => m.SortModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
