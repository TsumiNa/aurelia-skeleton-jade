import {computedFrom} from 'aurelia-framework';

export class Welcome {

  heading : string;
  firstName : string;
  lastName : string;
  previousValue: string;

  constructor(){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'Liu';
    this.lastName = 'Ping';
    this.previousValue = this.fullName;
  }

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  @computedFrom('firstName', 'lastName')
  get fullName() : string{
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value: string){
    return value && value.toUpperCase();
  }
}
