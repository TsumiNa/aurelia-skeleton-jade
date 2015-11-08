import { Router, RouterConfiguration } from 'aurelia-router';

export class ChildRouter{
  heading = 'Child Router';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.map([
      { route: ['','welcome'],  name: 'welcome',       moduleId: 'client/app/welcome',       nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'client/app/users',         nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'client/app/child-router',  nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
