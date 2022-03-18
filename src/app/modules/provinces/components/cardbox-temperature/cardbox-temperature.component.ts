import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../interfaces/city.interface';

@Component({
  selector: 'app-cardbox-temperature',
  templateUrl: './cardbox-temperature.component.html',
  styleUrls: ['./cardbox-temperature.component.css']
})
export class CardboxTemperatureComponent implements OnInit {

  @Input('city') city: City;

  constructor() { }

  ngOnInit(): void {
  }

  renderIconByTemperature(): string {
    if(+this.city.temperatures.min < 0) return '/assets/images/ice.png'
    if(+this.city.temperatures.min>0 && +this.city.temperatures.min<10) return '/assets/images/cloud.png'
    if(+this.city.temperatures.min> 10) return '/assets/images/sun.png'
    return '';
  }

}
