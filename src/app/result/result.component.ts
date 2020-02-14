import { DataService } from './../data/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../data/formData.model';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Thank you for staying tuned';
  @Input() formData : FormData;
  isFormValid : boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.formData = this.dataService.getFormData();
    this.isFormValid = this.dataService.isFormValid();
    console.log('Result feature loaded');
  }

  submit(){
    alert('Excellent Job!')
    this.formData = this.dataService.resetFormData()
    this.isFormValid = false;
  }

}
