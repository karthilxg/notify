import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

	private tempDate = '';
	private hoursLapsed: any;
	private minutesLapsed: any;
	private date;
	private notifications: any[];
	private reminders: any[];
	private assignedTasks: any[];

  constructor() { 
  	this.date =  new Date(); 
    setInterval(() => {
        this.date =  new Date();
    }, 1000); 
    // this.updateDateUponLoad();
  }  

  updateDateUponLoad() {
  		var todaysDate = 9;
  		var todaysHour = 10;
	  	var yesterdayData = 7; // date coming from data set and set using getDate()
	    // console.log(this.date.getDate() - 1);
	    if (this.date.getDate() - 1 == yesterdayData) {    	
	    	this.tempDate = 'Yesterday';
	    	// console.log(this.tempDate);
	    	// her we will set the date property of the notification item ==> yesterday
	    }
	    // console.log(this.date.getHours());
	    // console.log(this.date.getMinutes());
	    if (this.date.getDate() == todaysDate) {
	    	if (this.date.getHours() == todaysHour) {
	    		this.minutesLapsed = 60 - this.date.getMinutes();
	    		// console.log(timeLapsed);
	    		// here we will set the date property of the notification item ==> x minutes ago
	    	}
	    	if (this.date.getHours() > todaysHour) {
	    		this.hoursLapsed = this.date.getHours() - todaysHour;
	    		console.log(this.hoursLapsed)
	    		// here we will set the date property of the notification item ==> x hours ago
	    	}
	    }
	}

  ngOnInit() {
  	this.notifications = ['note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1'];
  	this.reminders = ['reminder','reminder','reminder'];
  	var d = new Date();
		var weekday = new Array(7);
		weekday[0] =  "Sunday";
		weekday[1] = "Saturday";
		

		// var n = weekday[d.getDay()];
		this.updateDateUponLoad();
  }


}
