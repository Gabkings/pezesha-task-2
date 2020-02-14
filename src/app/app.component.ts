import { DataService } from './data/data.service';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Multi-step form';
  @Input() formData;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.formData = this.dataService.getFormData()
    console.log(this.title + 'loaded');
  }
}
