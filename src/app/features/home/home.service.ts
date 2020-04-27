import { Injectable } from '@angular/core';
import { HomeModule } from './home.module';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  
  getRandomColor() {
    var letters = 'EF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 2)];
    }
    return color;
  }


}
