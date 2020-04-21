import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { Expense } from '../store/expense.model';
import { Observable } from 'rxjs';
import { selectExpenseWithParticipants, selectAllExpenses, selectAllExpensesWithParticipants } from '../store/expense.selectors';
import { updateExpense, addParticipantInExpenses, addExpense } from '../store/expense.actions';
import { Participant } from '../../participants/store/participant.model';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedGroupExpenses } from '../../groups/store/groups.selectors';
import { addExpenseInGroup } from '../../groups/store/groups.actions';
@Component({
  selector: 'app-e-list2',
  templateUrl: './e-list2.component.html',
  styleUrls: ['./e-list2.component.scss']
})
export class EList2Component implements OnInit {

  expense$: Observable<Expense> = this.store.pipe(select(selectExpenseWithParticipants, '1231 e-list'));
  allExpenses$: Observable<Expense[]>;
  showReportBtn:boolean = false;
  constructor(public store: Store<State>, private router : ActivatedRoute) { }

  ngOnInit(): void {
    //console.log('ngOnInit e-list');
    console.log(this.router.snapshot.url[1])
    if(!this.router.snapshot.url[1]){
      this.allExpenses$ = this.store.pipe(select(selectAllExpenses))
    }else{
      this.allExpenses$ = this.store.pipe(select(selectSelectedGroupExpenses))
      this.showReportBtn = true;
    }
    this.expense$.subscribe(e => console.log(e))
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

  addParticipant({expenseId, participantId} : {expenseId: string, participantId: string}) {
    console.log("debug ",expenseId,participantId)
    this.store.dispatch(addParticipantInExpenses({
      expenseId: expenseId,
      participantId: participantId
    }));
  }

  trackBackExpense(index: number, expense: Expense) {
    // console.log("Track Back Expense : ", expense.name, index);
    return expense.id
  }

  addExpense(){
    const expenseId = uuid()
    let emptyExpense:Expense = {
      id : expenseId,
      amount : null,
      name : '',
      participantIds : ['1'],
      payedBy : '1'

    };
    this.store.dispatch(addExpense({
      expense : emptyExpense
    }));
    if(this.router.snapshot.url[1]){
      console.log(this.router.snapshot.url[1])
      this.store.dispatch(addExpenseInGroup({
        groupId: this.router.snapshot.url[1].toString(),
        expenseId: expenseId
      }))
    }

    window.setTimeout(() => 
      window.scrollTo(0,document.body.scrollHeight),
    0);
  }
}
