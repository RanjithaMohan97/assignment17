import { Component } from '@angular/core';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
    customers =[
        {
        id:4,
        name:"Karikalan",
        location:"Thirunelveli"
        },
        {
        id:5,
        name:"Raja",
        location:"Tanjore"
        },
        {
        id:6,
        name:"Kulasekaran",
        location:"Madurai"
        }
    ]
}