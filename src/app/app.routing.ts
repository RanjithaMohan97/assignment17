import {Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user.component';
import { CustomerComponent } from './customer.component';
import { DetailsComponent } from './details.component';

const appRoutes:Routes =[
    {path:"",component:UserComponent},
    {path:"customers",component:CustomerComponent},
    {path:"details/:id",component:DetailsComponent}
];
export const routing = RouterModule.forRoot(appRoutes);