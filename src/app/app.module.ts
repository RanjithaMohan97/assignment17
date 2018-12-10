import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { CustomerComponent } from './customer.component';
import { DetailsComponent } from './details.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [AppComponent,UserComponent,CustomerComponent,DetailsComponent],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
