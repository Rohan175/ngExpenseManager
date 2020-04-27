import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  actionSettingsChangeTheme,
} from './settings.actions';
import { SettingsState, State } from './settings.model';
import { selectSettings } from './settings.selectors';

@Component({
  selector: 'anms-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {
  
  settings$: Observable<SettingsState>;

  themes = [
    { value: 'light', label: 'light' },
    { value: 'dark', label: 'dark' }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
  }
  onThemeSelect({ value: theme }) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

}
