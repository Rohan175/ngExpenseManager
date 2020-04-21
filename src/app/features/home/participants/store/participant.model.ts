import { EntityState } from '@ngrx/entity';

export interface Participant {
  id   : string;
  name : string;
}

export interface ParticipantState extends EntityState<Participant> {}
