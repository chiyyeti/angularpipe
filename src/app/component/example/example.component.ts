import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  public name="pipes";
  name1="pipes  builtin pipes"
  name2='pipeTranform'

  custom="custom pipe"

   date1 = new Date()
  user={
    userFirst:"garla",
    userName:'gana',
    designation:'developer',
    dob:'05/09/1997',
    salary:30000
  }
 countries: any;
  country=["India","Russia","America","Pakistan","China"]

addCountry(value: any){
this.countries=value
this.country.push(value)
console.log(this.country);

}
}
