import { Component } from '@angular/core';
import {NotifyComponent} from './notify/notify.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() { }

  notify:false;
  item = false;

  closeComponent() {
  	this.notify = false;
  }

  
}
