import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Expense } from './expense.model';

export const loadExpenses = createAction(
  '[Expense/API] Load Expenses', 
  props<{ expenses: Expense[] }>()
);

export const addExpense = createAction(
  '[Expense] Add Expense',
  props<{ expense: Expense }>()
);

export const upsertExpense = createAction(
  '[Expense/API] Upsert Expense',
  props<{ expense: Expense }>()
);

export const addExpenses = createAction(
  '[Expense/API] Add Expenses',
  props<{ expenses: Expense[] }>()
);

export const upsertExpenses = createAction(
  '[Expense/API] Upsert Expenses',
  props<{ expenses: Expense[] }>()
);

export const updateExpense = createAction(
  '[Expense/API] Update Expense',
  props<{ expense: Update<Expense> }>()
);

export const updateExpenses = createAction(
  '[Expense/API] Update Expenses',
  props<{ expenses: Update<Expense>[] }>()
);

export const deleteExpense = createAction(
  '[Expense/API] Delete Expense',
  props<{ id: string }>()
);

export const deleteExpenses = createAction(
  '[Expense/API] Delete Expenses',
  props<{ ids: string[] }>()
);

export const clearExpenses = createAction(
  '[Expense/API] Clear Expenses'
);


export const addParticipantInExpenses = createAction(
  '[Expense] Add Participant',
  props<{ expenseId: string, participantId : string }>()
);
export const removeParticipantInExpenses = createAction(
    '[Expense] Remove Participant',
    props<{ expenseId : string, participantId : string }>()
);

export const updateNameInExpense = createAction(
  '[Expense] Update Name In Participant',
  
  props<{ expenseId: string, name : string }>()
);

export const updateAmountInExpense = createAction(
  '[Expense] Update Amount In Participant',
  props<{ expenseId: string, amount : number }>()
);

export const updatePayedByInExpense = createAction(
  '[Expense] Update Payed By Participant',
  props<{ expenseId: string, payedById : string }>()
);