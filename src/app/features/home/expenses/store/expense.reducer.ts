import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Expense } from './expense.model';
import * as ExpenseActions from './expense.actions';

export const expensesFeatureKey = 'expenses';

export interface State extends EntityState<Expense> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Expense> = createEntityAdapter<Expense>();

export const initialState: State = adapter.getInitialState({
  ids: ['1231', '1232', '1233'],
  entities: {
    '1231': {
      id: '1231',
      name: 'Movie',
      amount: 900,
      payedBy: '1',
      participantIds: ['1', '2', '0']
    },
    '1232': {
      id: '1232',
      name: 'Dinner',
      amount: 400,
      payedBy: '2',
      participantIds: ['2', '3']
    },
    '1233': {
      id: '1233',
      name: 'IceCream',
      amount: 120,
      payedBy: '3',
      participantIds: ['1', '3']
    },
  }
});


export const reducer = createReducer(
  initialState,
  on(ExpenseActions.addExpense,
    (state, action) => adapter.addOne(action.expense, state)
  ),
  on(ExpenseActions.upsertExpense,
    (state, action) => adapter.upsertOne(action.expense, state)
  ),
  on(ExpenseActions.addExpenses,
    (state, action) => adapter.addMany(action.expenses, state)
  ),
  on(ExpenseActions.upsertExpenses,
    (state, action) => adapter.upsertMany(action.expenses, state)
  ),
  on(ExpenseActions.updateExpense,
    (state, action) => adapter.updateOne(action.expense, state)
  ),
  on(ExpenseActions.updateExpenses,
    (state, action) => adapter.updateMany(action.expenses, state)
  ),
  on(ExpenseActions.deleteExpense,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ExpenseActions.deleteExpenses,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ExpenseActions.loadExpenses,
    (state, action) => adapter.setAll(action.expenses, state)
  ),
  on(ExpenseActions.clearExpenses,
    state => adapter.removeAll(state)
  ),
  on(ExpenseActions.updatePayedByInExpense,
    (state, action) =>
      adapter.updateOne({
        id: action.expenseId,
        changes:
        {
          payedBy: action.payedById
        }
      }, state)),
  on(ExpenseActions.updateAmountInExpense,
    ExpenseActions.updateNameInExpense,
    (state, action) =>
      adapter.updateOne({
        id: action.expenseId,
        changes:
        {
          ...action
        }
      }, state)),
  on(ExpenseActions.addParticipantInExpenses,
    (state, action) =>
      adapter.updateOne(
        {
          id: action.expenseId,
          changes:
          {
            participantIds:
              [...state.entities[action.expenseId].participantIds,
              action.participantId]
          }
        }, state)
  ),
  on(ExpenseActions.removeParticipantInExpenses,
    (state, action) => {
      let newPIds =  [...state.entities[action.expenseId].participantIds]
      newPIds.splice(newPIds.indexOf(action.participantId),1)
      return adapter.updateOne(
        {
          id: action.expenseId,
          changes:
          {
            participantIds: newPIds
          }
        }, state)
      }
    )
);


