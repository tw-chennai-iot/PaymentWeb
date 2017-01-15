import { Component } from '@angular/core';
import { RouterModule, Routes,ROUTER_PROVIDERS } from '@angular/router';

@Component({
  selector: 'app',
  template: `<h1>Hello {{name}}</h1><router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'User.......'; }
