import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortRoutingModule } from './sort-routing.module';
import { SortComponent } from './sort.component';
import { SortpipePipe } from 'src/app/sortPipe/sortpipe.pipe';


@NgModule({
  declarations: [SortComponent,SortpipePipe],
  imports: [
    CommonModule,
    SortRoutingModule
  ],
  exports:[SortComponent,SortpipePipe]
})
export class SortModule { }
