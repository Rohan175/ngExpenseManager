import { createAction, props } from '@ngrx/store';
import { Participant } from './participant.model';

export const actionParticipantsUpsertOne = createAction(
  '[Participants] Upsert One',
  props<{ Participant: Participant }>()
);

export const actionParticipantsDeleteOne = createAction(
  '[Participants] Delete One',
  props<{ id: string }>()
);
