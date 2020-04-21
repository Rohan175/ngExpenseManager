import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { Groups } from '../store/groups.model';
import { Observable } from 'rxjs';
import {selectAllGroups} from '../store/groups.selectors';
import { Participant } from '../../participants/store/participant.model';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
import { addGroups } from '../store/groups.actions';

@Component({
  selector: 'app-g-list',
  templateUrl: './g-list.component.html',
  styleUrls: ['./g-list.component.scss']
})
export class GListComponent implements OnInit {

  // expense$: Observable<Groups> = this.store.pipe(select(selectExpenseWithParticipants, '1231 e-list'));
  allGroups$: Observable<Groups[]> = this.store.pipe(select(selectAllGroups));
  grpName:string="";
  selectedGroup:string = null;
  add:boolean =false;
  constructor(public store: Store<State>,private router: Router) { }

  ngOnInit(): void {
    //console.log('ngOnInit e-list');
    // this.expense$.subscribe(e => console.log(e))
  }

  ngOnChanges() {
    //console.log('ngOnChanges e-list');
  }
  ngDoCheck() {
    //console.log('ngDoCheck e-list');
  }
  ngOnDestroy() {
    //console.log('ngOnDestory e-list');
  }

  // addParticipant({expenseId, participantId} : {expenseId: string, participantId: string}) {
  //   console.log("debug ",expenseId,participantId)
  //   this.store.dispatch(addParticipantInExpenses({
  //     expenseId: expenseId,
  //     participantId: participantId
  //   }));
  // }

  trackBackExpense(index: number, expense: Groups) {
    // console.log("Track Back Expense : ", expense.name, index);
    return expense.id
  }

  select(Groups: Groups) {
    console.log("hoiu ",Groups)
    this.selectedGroup = Groups.id;
    this.router.navigate(['home/group', Groups.id]);
  }

  nameChange(e){
    this.grpName = e.target.value;
  }
  addGroup(){
    this.add = false;
    console.log("Add Group" , this.grpName)
    this.store.dispatch(addGroups({
      groups : {
        id : uuid(),
        name : this.grpName,
        expenseIds: []
      }
    }))
    this.grpName = "";
  }
  // addExpense(){

  //   let emptyExpense:Expense = {
  //     id : uuid(),
  //     amount : null,
  //     name : '',
  //     participantIds : ['1'],
  //     payedBy : '1'

  //   };
  //   this.store.dispatch(addExpense({
  //     expense : emptyExpense
  //   }));
  //   window.setTimeout(() => 
  //     window.scrollTo(0,document.body.scrollHeight),
  //   0);
  // }
}
