import { v4 as uuid } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant, ParticipantState } from '../store/participant.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { selectAllParticipants } from '../store/participant.selectors';
import { actionParticipantsUpsertOne } from '../store/participant.actions';


@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PListComponent implements OnInit {

  participants$: Observable<Participant[]> = this.store.pipe(select(selectAllParticipants));
  newParticipant: string = "";

  constructor(
    public store: Store<State>, ) { }

  ngOnInit(): void {
  }

  onNameChange({value}){
    console.log(value);
    this.newParticipant = value;
  }

  onClick(){
    this.store.dispatch(actionParticipantsUpsertOne({
      Participant : {
        id : uuid(),
        name : this.newParticipant,
      }
    }));
  }

}
