import { createSelector } from '@ngrx/store';

import { selectRouterState } from '../../../../core/core.state';
import { selecthome, homeState } from '../../Home.state';

import { participantAdapter } from './participant.reducer';

export const { selectEntities, selectAll,selectIds } = participantAdapter.getSelectors();

export const selectParticipants = createSelector(
  selecthome,
  (state: homeState) => state.participants
);

export const selectAllParticipants = createSelector(selectParticipants, selectAll);
export const selectIdsParticipants = createSelector(selectParticipants, selectIds);
export const selectParticipantsEntities = createSelector(selectParticipants, selectEntities);
export const selectParticipantFromId = (id) => createSelector(selectParticipantsEntities,(e) => e[id]);
export const selectSelectedParticipant = createSelector(
  selectParticipantsEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
);
