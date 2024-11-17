import { Component } from '@angular/core';
import { dummyDataObs$ } from 'src/app/types';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent {
  dummyDataObs$ = dummyDataObs$;
  STATES: any[];

  constructor() {
    this.dummyDataObs$.subscribe(console.log)

    function flatten(arr) {
      var array = [];
      while(arr.length) {
        var value = arr.shift();
        if(Array.isArray(value)) {
          // this line preserve the order
          arr = value.concat(arr);
        } else {
          array.push(value);
        }
      }
      return array;
    }
    
    const USA = [
        { name: 'Alabama', capital: 'Montgomery' },
        { name: 'Alaska', capital: 'Juneau' },
        { name: 'Arizona', capital: 'Phoenix' },
        { name: 'Arkansas', capital: 'Little Rock' },
        { name: 'California', capital: 'Sacramento' },
        { name: 'Colorado', capital: 'Denver' },
        { name: 'Connecticut', capital: 'Hartford' },
        { name: 'Delaware', capital: 'Dover' },
        { name: 'Florida', capital: 'Tallahassee' },
        { name: 'Georgia', capital: 'Atlanta' },
        { name: 'Hawaii', capital: 'Honolulu' },
        { name: 'Idaho', capital: 'Boise' },
        { name: 'Illinois', capital: 'Springfield' },
        { name: 'Indiana', capital: 'Indianapolis' },
        { name: 'Iowa', capital: 'Des Moines' },
        { name: 'Kansas', capital: 'Topeka' },
        { name: 'Kentucky', capital: 'Frankfort' },
        { name: 'Louisiana', capital: 'Baton Rouge' },
        { name: 'Maine', capital: 'Augusta' },
        { name: 'Maryland', capital: 'Annapolis' },
        { name: 'Massachusetts', capital: 'Boston' },
        { name: 'Michigan', capital: 'Lansing' },
        { name: 'Minnesota', capital: 'St. Paul' },
        { name: 'Mississippi', capital: 'Jackson' },
        { name: 'Missouri', capital: 'Jefferson City' },
        { name: 'Montana', capital: 'Helena' },
        { name: 'Nebraska', capital: 'Lincoln' },
        { name: 'Nevada', capital: 'Carson City' },
        { name: 'New Hampshire', capital: 'Concord' },
        { name: 'New Jersey', capital: 'Trenton' },
        { name: 'New Mexico', capital: 'Santa Fe' },
        { name: 'New York', capital: 'Albany' },
        { name: 'North Carolina', capital: 'Raleigh' },
        { name: 'North Dakota', capital: 'Bismarck' },
        { name: 'Ohio', capital: 'Columbus' },
        { name: 'Oklahoma', capital: 'Oklahoma City' },
        { name: 'Oregon', capital: 'Salem' },
        { name: 'Pennsylvania', capital: 'Harrisburg' },
        { name: 'Rhode Island', capital: 'Providence' },
        { name: 'South Carolina', capital: 'Columbia' },
        { name: 'South Dakota', capital: 'Pierre' },
        { name: 'Tennessee', capital: 'Nashville' },
        { name: 'Texas', capital: 'Austin' },
        { name: 'Utah', capital: 'Salt Lake City' },
        { name: 'Vermont', capital: 'Montpelier' },
        { name: 'Virginia', capital: 'Richmond' },
        { name: 'Washington', capital: 'Olympia' },
        { name: 'West Virginia', capital: 'Charleston' },
        { name: 'Wisconsin', capital: 'Madison' },
        { name: 'Wyoming', capital: 'Cheyenne' },
      ];
    
    
    this.STATES = flatten(Array(1000).fill(1).map(i => USA));    
  }
}
