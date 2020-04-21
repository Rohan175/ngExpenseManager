import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { Expense } from '../store/expense.model';
import { selectSelectedGroupExpenses } from '../../groups/store/groups.selectors';
import { combineLatest } from 'rxjs';
import { selectParticipantsEntities, selectParticipants, selectAllParticipants, selectIdsParticipants } from '../../participants/store/participant.selectors';
import { Participant } from '../../participants/store/participant.model';
import { Dictionary } from '@ngrx/entity';
import { selectIds } from '../../groups/store/groups.reducer';
import { whoPaysToWhome, participantWithBalnace, selectMinCashFlow } from './e-report.selector';

@Component({
  selector: 'app-e-report',
  templateUrl: './e-report.component.html',
  styleUrls: ['./e-report.component.scss']
})
export class EReportComponent implements OnInit {

  data: Array<whoPaysToWhome> = [];
  pWithB: Dictionary<participantWithBalnace> = {};
  constructor(public store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectMinCashFlow)).subscribe(e => {
      console.log("debug reports subscribed",e)
      this.data = e.data;
      this.pWithB = e.pWithB;
    })
    // this.initData();
  }

  initData(){
    
    combineLatest(
      this.store.pipe(select(selectSelectedGroupExpenses)),
      this.store.pipe(select(selectParticipantsEntities)),
      this.store.pipe(select(selectIdsParticipants))
    ).subscribe((d) => {
      const es: Expense[] = d[0]
      // const pWithB: Dictionary<participantWithBalnace> = {};
      // pWithB = {...d [1]} //).map(p => ({...d[1]p, balance: 0}));
      Object.keys(d[1]).forEach(
        id => this.pWithB[id] = { ...d[1][id], balance: 0 }
      )
      es.forEach(e => {
        const divideAmount = e.amount / e.participantIds.length;
        e.participantIds.forEach(pid => this.pWithB[pid.toString()].balance -= divideAmount)
        this.pWithB[e.payedBy.toString()].balance += e.amount
      })
      console.log("debug reports", es)
      console.log("debug reports", Object.keys(this.pWithB).map(id => this.pWithB[id].balance))


      this.minCashFlow(Object.keys(this.pWithB).map(id => this.pWithB[id].balance), d[2])
      this.data.forEach(d => console.log("debug reports", this.pWithB[d.pid].name, this.pWithB[d.paysToId].name))
    })
  }
  minCashFlow = (amount: Array<number>, ids) => {

    const minCashFlowRec = (amount: Array<number>) => {
      console.log("debug reports", amount)
      // Find the indexes of minimum and 
      // maximum values in amount[] 
      // amount[mxCredit] indicates the maximum amount  
      // to be given (or credited) to any person . 
      // And amount[mxDebit] indicates the maximum amount  
      // to be taken(or debited) from any person. 
      // So if there is a positive value in amount[],  
      // then there must be a negative value 
      const mxCredit = amount.reduce((iMax, x, i, amount) => x > amount[iMax] ? i : iMax, 0);
      const mxDebit = amount.reduce((iMax, x, i, amount) => x < amount[iMax] ? i : iMax, 0);

      // If both amounts are 0, then  
      // all amounts are settled 
      if (amount[mxCredit] == 0 && amount[mxDebit] == 0)
        return;

      // Find the minimum of two amounts 
      const min = Math.min(-amount[mxDebit], amount[mxCredit]);
      amount[mxCredit] -= min;
      amount[mxDebit] += min;

      // If minimum is the maximum amount to be 
      this.data.push({
        amount: min,
        pid: ids[mxDebit],
        paysToId: ids[mxCredit]
      })
      console.log("debug reports Person " + mxDebit + " pays " + min
        + " to " + "Person " + mxCredit);

      // Recur for the amount array.  
      // Note that it is guaranteed that 
      // the recursion would terminate  
      // as either amount[mxCredit]  or  
      // amount[mxDebit] becomes 0 
      minCashFlowRec(amount);
    }

    minCashFlowRec(amount)
  }


}
