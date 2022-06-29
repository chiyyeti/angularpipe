import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  pure:true       // if pure=true it does not add the data to the DOM, that is pure pipe
  // pure:false               // if pure = false it adds the data to the DOM ,that is impure pipe
})
export class PipesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]) {
    // console.log(value);
    
    // return   " custom pipe from transform method = "+value;
    return value.join()   // join() method is javascript method used to add the data into array for display
  }

}
