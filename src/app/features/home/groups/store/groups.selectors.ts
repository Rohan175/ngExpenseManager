import { createSelector } from '@ngrx/store';
import { selectRouterState } from '../../../../core/core.state';
import { selecthome, homeState } from '../../Home.state';

import { adapter } from './groups.reducer';
import { Groups } from './groups.model';
import { selectParticipantsEntities, selectParticipantFromId } from '../../participants/store/participant.selectors';
import { Participant } from '../../participants/store/participant.model';
import {selectExpensesEntities} from '../../expenses/store/expense.selectors'
import { Expense } from '../../expenses/store/expense.model';
const { selectEntities, selectAll, selectIds } = adapter.getSelectors();

const selectGroups = createSelector(
  selecthome,
  (state: homeState) => state.groups
);

const selectAllGroups = createSelector(selectGroups, selectAll);
const selectGroupsEntities = createSelector(selectGroups, selectEntities);
const selectSelectedGroupExpensesIds = createSelector(
  selectGroupsEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id].expenseIds,
);

// const selectSelectedGroupExpenses =createSelector(
//   selectGroupsEntities,
//   selectExpensesEntities,
//   (g,e) => 
// )

const selectSelectedGroupExpenses = createSelector(
  selectGroupsEntities,
  selectRouterState,
  selectExpensesEntities,
  (entities, params, e) => {
    console.log("debug grps",entities,entities[params.state.params.id], e)
    return params && entities[params.state.params.id].expenseIds.map(id => e[id.toString()])
  },
);

const selectGroup = createSelector(selectGroupsEntities, (Group, GroupId: string): Groups => Group[GroupId]);
// const selectParticipantsOfExpense = createSelector(selectGroup, selectParticipantsEntities, (e, p): Participant[] => e ? e.expenseIds.map((id:string) => p[id]) : []);
// const selectExpenseWithParticipants = createSelector(selectGroup, selectParticipantsOfExpense, (e, p): Groups => { return { ...e, expenseIds: p } });

const selectAllExpensesWithParticipants = createSelector(
selectGroupsEntities,
  selectParticipantsEntities,
  (e, p) => {
    return Object.keys(e).map(id =>
      ({ ...e[id], expenseIds: e[id].expenseIds.map((pid:string) => p[pid]) })
    )
  }
);

export {
  selectAllGroups,
  selectSelectedGroupExpenses
}