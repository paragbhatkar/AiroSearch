import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { uiAirlines } from '../../Model/ui-airlines';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AirlinesComponent implements OnInit {

airlines: uiAirlines[] = [{
  id: 1,
  name: 'name 1',
  tagLine: 'tag line 1',
  class: {economy: true, executive: false},
  address: {line1: 'adr line 1', line2: 'adr line 2', line3: 'adr line 3', city: 'city', pincode: '45875', state: 'state1', country: 'country'},
  rating: 3,
  userRating: 4,
  description: 'airline description'
},
{
  id: 2,
  name: 'name 2',
  tagLine: 'tag line 2',
  class: {economy: true, executive: false},
  address: {line1: 'adr line 1', line2: 'adr line 2', line3: 'adr line 3', city: 'city', pincode: '45875', state: 'state1', country: 'country'},
  rating: 2,
  userRating: 2,
  description: 'airline description'
},
{
  id: 3,
  name: 'name 3',
  tagLine: 'tag line 3',
  class: {economy: true, executive: false},
  address: {line1: 'adr line 1', line2: 'adr line 2', line3: 'adr line 3', city: 'city', pincode: '45875', state: 'state1', country: 'country'},
  rating: 4.5,
  userRating: 3.5,
  description: 'airline description'
}]

  constructor() { }

  ngOnInit() {
  }

}
