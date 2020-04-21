import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

import { settingsReducer } from '../features/settings/settings/settings.reducer';
import { SettingsState } from '../features/settings/settings/settings.model';

// import { environment } from '../../environments/environment';

// import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
// import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from '../features/settings/auth/store/auth.models';
import { authReducer } from '../features/settings/auth/store/auth.reducer';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer
};


export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
