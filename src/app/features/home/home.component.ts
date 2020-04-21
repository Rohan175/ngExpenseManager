import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../home/home.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private store: Store<State>, private route:Router) {}

  ngOnInit(): void {
  }

  changeRouteUrl(){
    this.route.navigateByUrl("/home")
  }

}
