import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Groups } from './groups.model';

export const loadGroupss = createAction(
  '[Groups/API] Load Groupss', 
  props<{ groupss: Groups[] }>()
);

export const addGroups = createAction(
  '[Groups/API] Add Groups',
  props<{ groups: Groups }>()
);

export const upsertGroups = createAction(
  '[Groups/API] Upsert Groups',
  props<{ groups: Groups }>()
);

export const addGroupss = createAction(
  '[Groups/API] Add Groupss',
  props<{ groupss: Groups[] }>()
);

export const upsertGroupss = createAction(
  '[Groups/API] Upsert Groupss',
  props<{ groupss: Groups[] }>()
);

export const updateGroups = createAction(
  '[Groups/API] Update Groups',
  props<{ groups: Update<Groups> }>()
);

export const updateGroupss = createAction(
  '[Groups/API] Update Groupss',
  props<{ groupss: Update<Groups>[] }>()
);

export const deleteGroups = createAction(
  '[Groups/API] Delete Groups',
  props<{ id: string }>()
);

export const deleteGroupss = createAction(
  '[Groups/API] Delete Groupss',
  props<{ ids: string[] }>()
);

export const clearGroupss = createAction(
  '[Groups/API] Clear Groupss'
);

export const addExpenseInGroup = createAction(
  '[Group] Add expense',
  props<{ groupId: string, expenseId : string }>()
);


export const removeExpenseInGroup = createAction(
  '[Group] remove expense',
  props<{ groupId: string, expenseId : string }>()
);