import { createSelector } from '@ngrx/store';

import { homeState, selecthome } from '../home.state';

export const selectTodosState = createSelector(
  selecthome,
  (state: homeState) => state.todos
);

export const selectTodosItems = createSelector(
  selectTodosState,
  state => state.items
);

export const selectTodosFilter = createSelector(
  selectTodosState,
  state => state.filter
);

export const selectTodos = createSelector(
  selectTodosItems,
  selectTodosFilter,
  (items, filter) => {
    if (filter === 'ALL') {
      return items;
    } else {
      const predicate = filter === 'DONE' ? t => t.done : t => !t.done;
      return items.filter(predicate);
    }
  }
);

export const selectRemoveDoneTodosDisabled = createSelector(
  selectTodosItems,
  items => !items.some(item => item.done)
);
