import { Component } from '@angular/core';
import { Http }			from '@angular/http';

// import {NotifyComponent} from './notify/notify.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [NotifyService]

})
export class AppComponent {

	constructor() { }

  notify:false;
  item = false;

  closeComponent() {
  	this.notify = false;
  }

  
}
