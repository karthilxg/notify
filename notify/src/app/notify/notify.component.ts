import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
	
	sampleData = [
  			{'id': '0',
  			 'type': 'assigned task', 
  			 'category': 'task', 
  			 'description': 'Oliver Quiver gas assigned the Interview - Book Travel task to you.',
  			 'date': new Date(1499662645409),
  			 'tempTime': ''
  			},
  			{'id': '1',
  			 'type': 'assigned task', 
  			 'category': 'task', 
  			 'description': 'Buck Owens has assigned the Mobility - Submit task to you.',
  			 'date': new Date(1499575088557),
  			 'tempTime': ''
  			},
  			{'id': '2',
  			 'type': 'notification', 
  			 'category': 'pipeline', 
  			 'description': 'The posting for Pipeline 1754689 - Graphics Designers has been approved.',
  			 'date': new Date(1500044423851),
  			 'tempTime': ''
  			},
  			{'id': '3',
  			 'type': 'reminder', 
  			 'category': 'someNote', 
  			 'description': 'The posting for Pipeline 1754689 - Graphics Designers has been approved.',
  			 'date': new Date(1499701681111),
  			 'tempTime': ''
  			},
  			{'id': '4',
  			 'type': 'assigned task', 
  			 'category': 'task', 
  			 'description': 'testing counter.',
  			 'date': new Date(1499701680000),
  			 'tempTime': ''
  			}
  	]
  private months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	private tempDate = '';
	private hoursLapsed: any;
	private minutesLapsed: any;
	private daysLapsed: any;
	private date;
	private yDate;
	private notifications: any[];
	private reminders: any[];
	private assignedTasks: any[];
	reminder: any;
	notification: any;
	assignedTask: any;

  constructor() { 
  	this.date =  new Date(); 
    setInterval(() => {
        this.date =  new Date();
    }, 30); 
    console.log(this.date.getTime())
  }  

  updateDateUponLoad() {

  	for (let i=0; i<this.sampleData.length;i++) {
  		this.date =  new Date(); 
	    if (this.date.getDate() == this.sampleData[i].date.getDate()) {
	    	if (this.date.getHours() == this.sampleData[i].date.getHours()
	    		|| this.date.getHours() - this.sampleData[i].date.getHours() == 1) {
	    		this.minutesLapsed = 60 - this.sampleData[i].date.getMinutes();
	    		if (this.minutesLapsed == 1) {
	    			this.sampleData[i].tempTime = String(this.minutesLapsed)+' Minute ago'
	    		}
	    		else if (this.minutesLapsed > 1) {
	    			this.sampleData[i].tempTime = String(this.minutesLapsed)+' Minutes ago'
	    		}
	    		// console.log(timeLapsed);
	    		// here we will set the date property of the notification item ==> x minutes ago
	    	}
	    	if (this.date.getHours() > this.sampleData[i].date.getHours() 
	    		&& this.date.getHours() - this.sampleData[i].date.getHours() > 1) {
	    		this.hoursLapsed = this.date.getHours() - this.sampleData[i].date.getHours();		    		
	    		this.sampleData[i].tempTime	= String(this.hoursLapsed)+' Hours ago'; 	
	    		// console.log(this.hoursLapsed)
	    		// here we will set the date property of the notification item ==> x hours ago
	    	}
	    	if (this.date.getHours() - this.sampleData[i].date.getHours() == 1) {
	    		this.sampleData[i].tempTime	= String(this.hoursLapsed)+' Hour ago';
	    	}
	    }
	    if (this.date.getDate() != this.sampleData[i].date.getDate()) {
	    	// console.log(this.sampleData[i].date.getMonth())
	    	// console.log(this.months[this.sampleData[i].date.getMonth()])
	    	this.sampleData[i].tempTime = this.months[this.sampleData[i].date.getMonth()]+' '+String(this.sampleData[i].date.getDay())
	    	// this will set the date property of the notification item ==> month day
	    	// console.log(this.sampleData[i].tempTime)
	    }
	    if (this.date.getDate() - 1 == this.sampleData[i].date.getDate()) {    	
	    	this.tempDate = 'Yesterday';		
	    	this.sampleData[i].tempTime = this.tempDate; 	
	    	// console.log(this.tempDate);
	    	// here we will set the date property of the notification item ==> yesterday
	    }		
	  }
	}

	removeItem(item) {		
		this.sampleData.splice(item, 1);
		this.getTypeCount();	
	}

	getTypeCount() {
		this.assignedTask = this.sampleData.filter(function(a){return (a.type=='assigned task')}).length;
		if (this.assignedTask < 10) {
			this.assignedTask = '0'+String(this.assignedTask)
		}
		this.reminder = this.sampleData.filter(function(a){return (a.type=='reminder')}).length;
		if (this.reminder < 10) {
			this.reminder = '0'+String(this.reminder)
		}
		this.notification = this.sampleData.filter(function(a){return (a.type=='notification')}).length;
		if (this.notification < 10) {
			this.notification = '0'+String(this.notification)
		}		
	}

  ngOnInit() {
  	

  	this.notifications = ['note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1','note1','note1','note1',
  												'note1','note1','note1'];
  	this.reminders = ['reminder','reminder','reminder'];
  // 	var d = new Date();
		// var weekday = new Array(7);
		// weekday[0] =  "Sunday";
		// weekday[1] = "Saturday";
		
		// example for setting a time stamp
		// d.setTime(1332403992588);
		// this.sampleData[1].date = d;
  // 	console.log(this.sampleData[1].date.getDate())

		// var n = weekday[d.getDay()];
		this.getTypeCount();

		this.updateDateUponLoad();
  }
}



// getItems() {
//     return this.http.get('../app/models/items.json')
//         .toPromise()
//         .then(res => <Task[]> res.json().data)
//         .then(data => { return data; });

// }





