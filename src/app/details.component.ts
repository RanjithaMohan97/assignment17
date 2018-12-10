import { Component,OnInit } from '@angular/core';

import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
//import "rxjs/add/operator/map";

@Component({
    templateUrl: './details.component.html'
}) 
export class DetailsComponent implements OnInit{
    id:any;
    constructor(private route:ActivatedRoute,private location:Location){

    }
    ngOnInit(){
        this.route.params.forEach((params:Params)=>{
            this.id = +params['id'];
        });
    }
    
}