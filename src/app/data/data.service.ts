import { Injectable } from '@angular/core';
import { FormData, Personal, Document, Company } from './formData.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData : FormData = new FormData();
  private isPersonalFormValid : boolean = false;
  private isDocumentFormValid : boolean = false;
  private isCompanyFormValid : boolean = false;


  getPersonal() : Personal{
    //Return the persoanl data
    var personal : Personal ={
      firstName : this.formData.firstName,
      lastName : this.formData.lastName,
      email : this.formData.email,
      phoneNumber : this.formData.phoneNumber
    }
    return personal;
  }

  setPersonal(data : Personal){
    //Update the persoanl data 
    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
    this.formData.phoneNumber = data.phoneNumber;
  }


  getDocument() : Document{
    var document : Document ={
      kraPin : this.formData.kraPin,
      nationalID : this.formData.nationalID
    };
    return document;
  }

  setDocument(data: Document){
    this.isDocumentFormValid = true;
    this.formData.kraPin = data.kraPin;
    this.formData.nationalID = data.nationalID;
  }

  getCompany() : Company{
    var company : Company = {
      companyRevenue : this.formData.companyRevenue,
      companyName : this.formData.companyName,
      companyLocation : this.formData.companyLocation
    }

    return company;
  }

  setCompany(data: Company){
    this.isCompanyFormValid = true;
    this.formData.companyName = data.companyName;
    this.formData.companyLocation = data.companyLocation;
    this.formData.companyRevenue = data.companyRevenue;
  }

  getFormData() : FormData{
    //Return the entite form
    return this.formData;
  }

  resetFormData() : FormData{
    //return the form data after fields have been submitted
    this.formData.clear();
    this.isCompanyFormValid = this.isDocumentFormValid = this.isPersonalFormValid = false;
    return this.formData;
  }

  isFormValid(){
    //Return true if all forms had been validated successfully
    return this.isPersonalFormValid && this.isDocumentFormValid && this.isCompanyFormValid;
  }


  constructor() { }
}
