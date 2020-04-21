import { Participant } from '../../participants/store/participant.model';

export interface Expense {
  id: string;
  name : string;
  amount : number;
  //payedBy : any;
  payedBy : string | Participant,
  participantIds: Array<string | Participant>;
}


// export interface ExpenseStore {
//   id: string;
//   name : string;
//   amount : number;
//   participant: Array<string>;
// }

// export interface ExpenseView {
//   id: string;
//   name : string;
//   amount : number;
//   participant: Array<Participant>;
// }