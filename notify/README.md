# Notify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## System Requirements

This project requires:

`node version: 6.* or higher` for installation and support please see [nodejs](https://nodejs.org/en/)   
`ng version: 1.2` for installation and support please see [@angular-cli](https://cli.angular.io/)

## Simple Install

Clone the repo into desired directory. Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Data Structure

Example data set with minimal required properties.

`[
	{
		'id': '0',  
		'type': 'assigned task',   
		'category': 'task',   
		'description': 'Oliver Quiver gas assigned the Interview - Book Travel task to you.',  
		'date': new Date(1499662645409),  
		'tempTime': '',
		'viewItem': 'View Task'  
	},  
	...  
]`  

## Usage Notes

If an item is selected (example 'View Task'), the component currently (captures via its' index) fires a console log of the entire item selected. It will also close the notification component as expected. This can be passed to the appropriate component to then work on that item or view that item individually. 

## Outstanding features




