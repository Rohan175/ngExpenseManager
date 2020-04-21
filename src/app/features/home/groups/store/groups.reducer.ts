import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Groups } from './groups.model';
import * as GroupsActions from './groups.actions';

export const groupsesFeatureKey = 'groupses';

export interface State extends EntityState<Groups> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Groups> = createEntityAdapter<Groups>();

export const initialState: State = adapter.getInitialState({
  ids: ['12311', '12321'],
  entities: {
    '12311': {
      id: '12311',
      name: 'Group 1',
      expenseIds: ['1231', '1232']
    },
    '12321': {
      id: '12321',
      name: 'Group 2',
      expenseIds: ['1233']
    },
  }
});


const groupsReducer = createReducer(
  initialState,
  on(GroupsActions.addGroups,
    (state, action) => adapter.addOne(action.groups, state)
  ),
  on(GroupsActions.upsertGroups,
    (state, action) => adapter.upsertOne(action.groups, state)
  ),
  on(GroupsActions.addGroupss,
    (state, action) => adapter.addMany(action.groupss, state)
  ),
  on(GroupsActions.upsertGroupss,
    (state, action) => adapter.upsertMany(action.groupss, state)
  ),
  on(GroupsActions.updateGroups,
    (state, action) => adapter.updateOne(action.groups, state)
  ),
  on(GroupsActions.updateGroupss,
    (state, action) => adapter.updateMany(action.groupss, state)
  ),
  on(GroupsActions.deleteGroups,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(GroupsActions.deleteGroupss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(GroupsActions.loadGroupss,
    (state, action) => adapter.setAll(action.groupss, state)
  ),
  on(GroupsActions.clearGroupss,
    state => adapter.removeAll(state)
  ),
  on(GroupsActions.addExpenseInGroup,
    (state, action) =>
      {
        console.log(action,
          
          [...state.entities[action.groupId].expenseIds,
          action.expenseId])
        return adapter.updateOne(
        {
          id: action.groupId,
          changes:
          {
            expenseIds:
              [...state.entities[action.groupId].expenseIds,
              action.expenseId]
          }
        }, state)
      }
  ),
  on(GroupsActions.removeExpenseInGroup,
    (state, action) =>
      { 
        let newEIds =  [...state.entities[action.groupId].expenseIds]
        newEIds.splice(newEIds.indexOf(action.expenseId),1)
        return adapter.updateOne(
        {
          id: action.groupId,
          changes:
          {
            expenseIds: newEIds
          }
        }, state)}
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return groupsReducer(state, action);
}


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
