import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

	private date;
	private notifications: any[];
	private reminders: any[];
	private assignedTasks: any[];

  constructor() {   	
    this.date =  new Date(); 
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }  

  ngOnInit() {
  	this.notifications = ['note1','note1','note1','note1','note1','note1','note1','note1','note1','note1','note1','note1','note1','note1','note1'];
  	this.reminders = ['reminder','reminder','reminder'];
  }


}
