import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../data/formData.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  title = 'Please fill in company details';
  company : Company;
  form : any;

  constructor(private router: Router, private serviceData: DataService) { }

  ngOnInit(): void {
    this.company = this.serviceData.getCompany();
    console.log(this.title, + ' loaded');
  }

  saveCompany(form : any): boolean{
    if(!form.valid){
      return false;
    }
    this.serviceData.setCompany(this.company);
    return true;
  }

  goToNext(form: any){
    if(this.saveCompany(form)){
      this.router.navigate(['/result'])
    }
  }

  goToPrevious(form : any){
    if(this.saveCompany(form)){
      this.router.navigate(['/document'])
    }
  }

}
