import { Injectable } from '@angular/core';
import { HomeModule } from './home.module';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  
  getRandomColor() {
    var letters = '89ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }


}
