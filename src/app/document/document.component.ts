import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Document } from '../data/formData.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  title = 'Please enter your <b>KRA Pin</b> and <b>National ID Number</b>'

  document : Document;
  form :any;

  constructor( private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.document = this.dataService.getDocument();
    console.log(this.title + ' loaded');
  }

  saveDocument(form: any): boolean{
    if(!form.valid){
      return false;
    }
    this.dataService.setDocument(this.document);
    return true;
  }

  goToNext(form :any){
    if(this.saveDocument(form)){
      //navigate to company
      this.router.navigate(['/company'])
    }
  }

  goToPrevious(form : any){
    if(this.saveDocument(form)){
      //navigate to persoanal details
      this.router.navigate(['/personal'])
    }
  }
}
