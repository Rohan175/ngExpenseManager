import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.state';

import { ParticipantState } from './participants/store/participant.model';
import { participantReducer } from './participants/store/participant.reducer';

import {State as ExpenseState} from './expenses/store/expense.reducer';
import {reducer as expenseReducer} from './expenses/store/expense.reducer';

import {State as GroupState} from './groups/store/groups.reducer';
import {reducer as groupReducer} from './groups/store/groups.reducer';


export const FEATURE_NAME = 'home';
export const selecthome = createFeatureSelector<State, homeState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<homeState> = {  
  participants: participantReducer,
  expenses: expenseReducer,
  groups: groupReducer,
};

export interface homeState {
  participants : ParticipantState;
  expenses: ExpenseState;
  groups: GroupState;
}

export interface State extends AppState {
  home: homeState;
}
