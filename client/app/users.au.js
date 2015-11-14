import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import * as collections from '../../collections'

@inject(HttpClient)
export class Users{
  heading = 'Github Users';
  users = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
    Tracker.autorun(() =>{
      Meteor.subscribe('AllUsers')
      let user = collections.Users.find({}).fetch()[2]
      console.log('from users');
      console.log(user);
    })
  }

  activate(){
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
