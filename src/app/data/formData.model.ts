export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    phoneNumber: string = '';
    nationalID: string = '';
    kraPin: string = '';
    companyName: string = '';
    companyLocation: string = '';
    companyRevenue: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
        this.nationalID = '';
        this.kraPin = '';
        this.companyName = '';
        this.companyRevenue = '';
        this.companyLocation = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    phoneNumber: string = '';
}

export class Document {
    nationalID: string = '';
    kraPin: string = '';
}

export class Company {
    companyName: string = '';
    companyLocation: string = '';
    companyRevenue: string = '';
}