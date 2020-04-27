import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { AppState } from '../../core.state';
import { Observable } from 'rxjs';
import {selectTheme} from "./features/settings/settings/settings.selectors";
import { ThemeOptions } from 'src/app/features/settings/settings/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngMatFlexNgrx';
  $theme:Observable<ThemeOptions> = this.store.pipe(select(selectTheme));
 
  constructor(public store: Store){}
}
