import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject
export class Users{
  heading: string = 'Github Users';
  users: any[] = [];
  http: HttpClient;

  constructor(http: HttpClient){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
