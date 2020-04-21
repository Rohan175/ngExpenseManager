import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Participant, ParticipantState } from './participant.model';
import { actionParticipantsUpsertOne, actionParticipantsDeleteOne } from './participant.actions';
import { Action, createReducer, on } from '@ngrx/store';

export function sortByName(a: Participant, b: Participant): number {
  return a.name.localeCompare(b.name);
}

export const participantAdapter: EntityAdapter<Participant> = createEntityAdapter<Participant>({
  sortComparer: sortByName
});

export const initialState: ParticipantState = participantAdapter.getInitialState({
  ids: ['0','1','2','3'],
  entities: {
    '0': {
      id: '0',
      name: 'Rohan',
    },
    '1': {
      id: '1',
      name: 'Kaushik',
    },
    '2': {
      id: '2',
      name: 'Dhrumil',
    },
    '3': {
      id: '3',
      name: 'Nishant',
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionParticipantsUpsertOne, (state, { Participant }) =>
    participantAdapter.upsertOne(Participant, state)
  ),
  on(actionParticipantsDeleteOne, (state, { id }) => participantAdapter.removeOne(id, state))
);

export function participantReducer(state: ParticipantState | undefined, action: Action) {
  return reducer(state, action);
}
