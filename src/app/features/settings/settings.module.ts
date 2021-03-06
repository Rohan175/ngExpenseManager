import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './settings/settings-container.component';
import {LoginFormComponent} from './auth/login-form/login-form.component';

@NgModule({
  declarations: [SettingsContainerComponent, LoginFormComponent],
  imports: [CommonModule, SharedModule, SettingsRoutingModule]
})
export class SettingsModule {}
