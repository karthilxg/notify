import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

	// sampleData: any [];
	sampleData = [
  			{'id': '0',
  			 'type': 'notification', 
  			 'category': 'task', 
  			 'description': 'Oliver Quiver gas assigned the Interview - Book Travel task to you.',
  			 'date': new Date(1499662645409)
  			},
  			{'id': '1',
  			 'type': 'notification', 
  			 'category': 'task', 
  			 'description': 'Buck Owens has assigned the Mobility - Submit task to you.',
  			 'date': new Date(1499575088557)
  			},
  			{'id': '2',
  			 'type': 'notification', 
  			 'category': 'pipeline', 
  			 'description': 'The posting for Pipeline 1754689 - Graphics Designers has been approved.',
  			 'date': new Date(1500044423851)
  			}
  	]

	private tempDate = '';
	private hoursLapsed: any;
	private minutesLapsed: any;
	private date;
	private yDate;
	private notifications: any[];
	private reminders: any[];
	private assignedTasks: any[];

  constructor() { 
  	// this.date =  new Date(); 
   //  setInterval(() => {
   //      this.date =  new Date();
   //  }, 1000); 
    // console.log(this.date.getTime())
  }  

  updateDateUponLoad() {
  		var todaysDate = 9;
  		var todaysHour = 10;
	  	var yesterdayData = 7; // date coming from data set and set using getDate()
	    
	  	// this.yDate = new Date();
	   //  var obj = this.yDate.setDate(this.yDate.getDate() - 1);
	   //  console.log(obj);
	    // console.log(this.date.getDay());
	  	// console.log(this.date.getMonth());

	  	
	  	for (let i=0; i<this.sampleData.length;i++) {
	  		
		    if (this.date.getDate() - 1 == this.sampleData[i].date.getDate()) {    	
		    	this.tempDate = 'Yesterday';		    	
		    	// console.log(this.tempDate);
		    	// her we will set the date property of the notification item ==> yesterday
		    }		    
		    if (this.date.getDate() == this.sampleData[i].date.getDate()) {
		    	if (this.date.getHours() == this.sampleData[i].date.getHours()
		    			|| this.date.getHours() - this.sampleData[1].date.getHours() == 1) {
		    		this.minutesLapsed = 60 - this.sampleData[i].date.getMinutes();
		    		// console.log(timeLapsed);
		    		// here we will set the date property of the notification item ==> x minutes ago
		    	}
		    	if (this.date.getHours() > this.sampleData[i].date.getHours() 
		    			&& this.date.getHours() - this.sampleData[1].date.getHours() > 1) {
		    		this.hoursLapsed = this.date.getHours() - this.sampleData[i].date.getHours();
		    		console.log(this.hoursLapsed)
		    		// here we will set the date property of the notification item ==> x hours ago
		    	}
		    }
		  }
	}

  ngOnInit() {
  	this.date =  new Date(); 
    setInterval(() => {
        this.date =  new Date();
    }, 1000); 

  	this.notifications = ['note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1'];
  	this.reminders = ['reminder','reminder','reminder'];
  	var d = new Date();
		var weekday = new Array(7);
		weekday[0] =  "Sunday";
		weekday[1] = "Saturday";
		
		// example for setting a time stamp
		// d.setTime(1332403992588);
		// this.sampleData[1].date = d;
  // 	console.log(this.sampleData[1].date.getDate())

		// var n = weekday[d.getDay()];
		this.updateDateUponLoad();
  }


}
