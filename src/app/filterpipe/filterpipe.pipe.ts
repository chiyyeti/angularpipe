import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {




  transform(value: any, filterString:any) {

    if(!value || !filterString  ){
      return value;
    }
   
    let  args = filterString.toLocaleLowerCase();

    return value.filter(item=>{
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })




  //   return value.filter(data=>data.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) ||
  // value.filter(data=>data.email.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) ||
  // value.filter(data=>data.id.toString().includes(filterString.toString())) 
  
  }

}
