import { Injectable } from '@angular/core';
import {Http}					from '@angular/http';

import {ITEMS} 				from '../models/mock-items';
import {Item} 				from '../models/item';

@Injectable()
export class NotifyService {

  constructor(private http: Http) { }
  	getItems(): Promise<Item[]> {
  		return Promise.resolve(ITEMS);
  	}
  
}
