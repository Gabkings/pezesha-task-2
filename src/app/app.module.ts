import { ResultComponent } from './result/result.component';
import { DataService } from './data/data.service';
import { CompanyComponent } from './company/company.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { DocumentComponent } from './document/document.component';
import { AppRoutingModule }   from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent, NavbarComponent,PersonalComponent,CompanyComponent,DocumentComponent, ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: DataService, useClass: DataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
