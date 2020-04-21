import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { Expense } from '../store/expense.model';
import { Observable } from 'rxjs';
import { selectExpenseWithParticipants,selectAllExpenses, selectAllExpensesWithParticipants } from '../store/expense.selectors';
import { updateExpense, addParticipantInExpenses } from '../store/expense.actions';

@Component({
  selector: 'app-e-list',
  templateUrl: './e-list.component.html',
  styleUrls: ['./e-list.component.scss']
})
export class EListComponent implements OnInit {

  expense$: Observable<Expense> = this.store.pipe(select(selectExpenseWithParticipants,'1231 e-list'));
  allExpensesWithParticipants$ : Observable<Expense[]> = this.store.pipe(select(selectAllExpensesWithParticipants));
  constructor(public store : Store<State>) { }

  ngOnInit(): void {
    //console.log('ngOnInit e-list');
    this.expense$.subscribe(e => console.log(e))
    this.allExpensesWithParticipants$.subscribe(e =>console.log(e))
  }

  ngOnChanges(){
    //console.log('ngOnChanges e-list');
  }
  ngDoCheck(){
    //console.log('ngDoCheck e-list');
  }
  ngOnDestroy(){
    //console.log('ngOnDestory e-list');
  }

  addParticipant(expense:Expense){
    // console.log(expense)
    // expense.participantIds.push("3")
    this.store.dispatch(addParticipantInExpenses( { expenseId : expense.id , participantId : '3'} ));
  }

  trackBackExpense(index:number,expense:Expense){
    // console.log("Track Back Expense : ", expense.name, index);
    return expense.id
  }
}
