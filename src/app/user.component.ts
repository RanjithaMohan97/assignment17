import { Component } from '@angular/core';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {
    users =[
        {
        id:1,
        name:"Ram",
        location:"chennai"
        },
        {
        id:2,
        name:"Krish",
        location:"coimbatore"
        },
        {
        id:3,
        name:"Karna",
        location:"madurai"
        }
    ]
}