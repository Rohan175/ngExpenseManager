import { createSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { selectSettingsState } from '../../../core/core.module';

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);