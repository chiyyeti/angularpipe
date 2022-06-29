import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesPipe } from './pipes.pipe';
import { FilterModule } from './Filter/filter/filter.module';
import { ExampleComponent } from './component/example/example.component';
import { SortModule } from './Sort/sort/sort.module';


@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    ExampleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterModule,
    SortModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
