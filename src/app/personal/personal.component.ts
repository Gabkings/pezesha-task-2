import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Personal } from '../data/formData.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself';
  personal : Personal;
  form : any;
  constructor( private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.personal = this.dataService.getPersonal();
    console.log('Personal feature loaded');
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }
    this.dataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form:any){
    if(this.save(form)){
      //Navigate to the document page
      this.router.navigate(['/document']);
    }
  }

}
