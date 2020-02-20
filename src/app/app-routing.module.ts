import { ResultComponent } from './result/result.component';
import { CompanyComponent } from './company/company.component';
import { PersonalComponent } from './personal/personal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DocumentComponent } from './document/document.component';
import { SuccessComponent } from './success/success.component';


export const routes: Routes = [
    //1st route
    {path: 'personal', component: PersonalComponent},
    //2nd route
    {path: 'company', component: CompanyComponent},
    //3rd route
    {path: 'document', component: DocumentComponent},
    //4th route
    {path: 'result', component: ResultComponent},
    //5th route
    {path: '', redirectTo: '/personal', pathMatch: 'full'},
    //6th route
    {path: 'success', component: SuccessComponent},
    //7th route
    {path: '**', component:PersonalComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }