import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterString:any

  constructor() { }

  ngOnInit(): void {
  }

frnds=[
  {id:1,
    name:'gana',
    email:'gana@gmail.com',
    contact:8978274486,
    dob:new Date(1997,5,17)
  },
  {id:2,
    name:'manu',
    email:'manu@gmail.com',
    contact:82628274486,
    dob:new Date(1993,10,21)
  },
  {id:3,
    name:'anil',
    email:'anil@gmail.com',
    contact:935544486,
    dob:new Date(1998,12,27)
  },
  {id:4,
    name:'suri',
    email:'suri@gmail.com',
    contact:9645154486,
    dob:new Date(1996,2,23)
  },
  {id:5,
    name:'sunny',
    email:'sunny@gmail.com',
    contact:6300689648,
    dob:new Date(2000,2,4)
  },
]


}
