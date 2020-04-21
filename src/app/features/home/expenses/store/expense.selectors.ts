import { createSelector, MemoizedSelector, DefaultProjectorFn, MemoizedSelectorWithProps } from '@ngrx/store';
import { selectRouterState } from '../../../../core/core.state';
import { selecthome, homeState } from '../../Home.state';

import { adapter, State } from './expense.reducer';
import { Expense } from './expense.model';
import { selectParticipantsEntities, selectParticipantFromId, selectIdsParticipants } from '../../participants/store/participant.selectors';
import { Participant } from '../../participants/store/participant.model';
import { selectSelectedGroupExpenses } from '../../groups/store/groups.selectors';
import { Dictionary } from '@ngrx/entity';
const { selectEntities, selectAll, selectIds } = adapter.getSelectors();

const selectExpenses = createSelector(
  selecthome,
  (state: homeState) => state.expenses
);

const selectAllExpenses = createSelector(selectExpenses, selectAll);
const selectExpensesEntities = createSelector(selectExpenses, selectEntities);
const selectSelectedExpense = createSelector(
  selectExpensesEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
);

const selectExpense = createSelector(selectExpensesEntities, (expense, expenseId: string): Expense => expense[expenseId]);
const selectParticipantsOfExpense = createSelector(selectExpense, selectParticipantsEntities, (e, p): Participant[] => e ? e.participantIds.map((id: string) => p[id]) : []);
const selectExpenseWithParticipants = createSelector(selectExpense, selectParticipantsOfExpense, (e, p): Expense => { return { ...e, participantIds: p } });

// const selectExpensesFromIds:MemoizedSelectorWithProps<State, Expense[], DefaultProjectorFn<Expense[]>> =
//  createSelector<State,Expense[],DefaultProjectorFn<Expense[]>>(selectExpensesEntities, (e, ids) => ids.map(id => e[id]))

const selectAllExpensesWithParticipants = createSelector(
  selectExpensesEntities,
  selectParticipantsEntities,
  (e, p) => {
    return Object.keys(e).map(id =>
      ({ ...e[id], payedBy: p[e[id].payedBy.toString()], participantIds: e[id].participantIds.map((pid: string) => p[pid]) })
    )
  });


export {
  selectExpenseWithParticipants,
  selectAllExpenses,
  selectExpensesEntities,
  // selectExpensesFromIds,
  selectAllExpensesWithParticipants
}