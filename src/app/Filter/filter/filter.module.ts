import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from 'src/app/filterpipe/filterpipe.pipe';


@NgModule({
  declarations: [FilterComponent,FilterpipePipe],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule
  ],
  exports:[FilterComponent,FilterpipePipe]
})
export class FilterModule { }
