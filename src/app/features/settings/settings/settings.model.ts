import { AppState } from '../../../core/core.module';

export type ThemeOptions = "light" | "dark";
export interface SettingsState {
  theme: ThemeOptions;
}

export interface State extends AppState {
  settings: SettingsState;
}
