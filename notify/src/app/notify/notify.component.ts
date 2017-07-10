import { Component, OnInit } from '@angular/core';
import { AppComponent }			 from '../app.component';
import { NotifyService }		 from '../services/notify.service';
import { Item }							 from '../models/item';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  providers: [NotifyService]
})
export class NotifyComponent implements OnInit {
	
	sampleData = [
  			// {'id': '0',
  			//  'type': 'assigned task', 
  			//  'category': 'task', 
  			//  'description': 'Oliver Quiver gas assigned the Interview - Book Travel task to you.',
  			//  'date': new Date(1499662645409),
  			//  'tempTime': '',
  			//  'viewItem': 'View Task'
  			// },
  			// {'id': '1',
  			//  'type': 'assigned task', 
  			//  'category': 'task', 
  			//  'description': 'Buck Owens has assigned the Mobility - Submit task to you.',
  			//  'date': new Date(1499575088557),
  			//  'tempTime': '',
  			//  'viewItem': 'View Task'
  			// },
  			// {'id': '2',
  			//  'type': 'notification', 
  			//  'category': 'pipeline', 
  			//  'description': 'The posting for Pipeline 1754689 - Graphics Designers has been approved.',
  			//  'date': new Date(1500044423851),
  			//  'tempTime': '',
  			//  'viewItem': 'View Pipeline'
  			// },
  			// {'id': '4',
  			//  'type': 'assigned task', 
  			//  'category': 'task', 
  			//  'description': 'testing counter.',
  			//  'date': new Date(1499701680000),
  			//  'tempTime': '',
  			//  'viewItem': 'View Task'
  			// },
  			// {'id': '3',
  			//  'type': 'reminder', 
  			//  'category': 'someNote', 
  			//  'description': 'The posting for Pipeline 1754689 - Graphics Designers has been approved.',
  			//  'date': new Date(1499701681111),
  			//  'tempTime': '',
  			//  'viewItem': 'View Note'
  			// }  			
  	]
  private months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	private tempDate = '';
	private hoursLapsed: any;
	private minutesLapsed: any;
	private daysLapsed: any;
	private date;	
	private reminder: any;
	private notification: any;
	private assignedTask: any;
	private selectedItem: any;

  constructor(private appComponent: AppComponent, 
  						private notifyService: NotifyService
  						) { 
  	this.date =  new Date(); 
    setInterval(() => {
        this.date =  new Date();
    }, 30); 
    // console.log(this.date.getTime())
  }  

  updateDateUponLoad() {

  	for (let i=0; i<this.sampleData.length;i++) {
  		
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

	selectItem(item) {
		this.selectedItem = this.sampleData[item];
		console.log(this.selectedItem);
		// this.appComponent.retrieveSelectedItem();
		this.appComponent.closeComponent();		
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

	items: Item[];
	getItems(): void {
    this.notifyService.getItems().then(items => {
    	this.items = items; 
    	// console.log(this.items)
    	this.sampleData = this.items;
    	console.log(this.sampleData)
    });    
  }

	tempData: any;
	d: any;
  ngOnInit() {

  	this.getItems();
  	
  			
		var sortBy = (function () {

		  //cached privated objects
		  var _toString = Object.prototype.toString,
		      //the default parser function
		      _parser = function (x) { return x; },
		      //gets the item to be sorted
		      _getItem = function (x) {
		        return this.parser((x !== null && typeof x === "object" && x[this.prop]) || x);
		      };

		  // Creates a method for sorting the Array
		  // @array: the Array of elements
		  // @o.prop: property name (if it is an Array of objects)
		  // @o.desc: determines whether the sort is descending
		  // @o.parser: function to parse the items to expected type
		  return function (array, o) {
		    if (!(array instanceof Array) || !array.length)
		      return [];
		    if (_toString.call(o) !== "[object Object]")
		      o = {};
		    if (typeof o.parser !== "function")
		      o.parser = _parser;
		    o.desc = !!o.desc ? -1 : 1;
		    return array.sort(function (a, b) {
		      a = _getItem.call(o, a);
		      b = _getItem.call(o, b);
		      return o.desc * (a < b ? -1 : +(a > b));
		    });
		  };
		} () );		

		this.getTypeCount();
		this.updateDateUponLoad();

		this.tempData = sortBy(this.sampleData, { prop: "date" });
		// console.log(this.tempData)

		this.d = new Date();
		// console.log (this.d.getDate(1499575088557))
  }
}





