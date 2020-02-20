import { DataService } from './../data/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../data/formData.model';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  isFormValid : boolean = false;
  title = 'Thank for trusting us with your information';
  @Input() formData : FormData;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    alert(this.title);
    this.formData = this.dataService.getFormData();
    this.isFormValid = this.dataService.isFormValid();
  }

}
