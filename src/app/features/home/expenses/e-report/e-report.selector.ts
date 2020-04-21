import { createSelector } from '@ngrx/store';
import { selectSelectedGroupExpenses } from '../../groups/store/groups.selectors';
import { selectParticipantsEntities, selectIdsParticipants } from '../../participants/store/participant.selectors';
import { Participant } from '../../participants/store/participant.model';
import { Dictionary } from '@ngrx/entity';

export interface participantWithBalnace extends Participant {
  balance?: number
}

export interface whoPaysToWhome {
  pid: string,
  paysToId: string,
  amount: number,
}

export const selectMinCashFlow = createSelector(
  selectSelectedGroupExpenses,
  selectParticipantsEntities,
  selectIdsParticipants,
  (es, d, ids) => {
    const pWithB: Dictionary<participantWithBalnace> = {};
    ids.forEach(id => pWithB[id] = { ...d[id], balance: 0 })
    es.forEach(e => {
      const divideAmount = e.amount / e.participantIds.length;
      e.participantIds.forEach(pid => pWithB[pid.toString()].balance -= divideAmount)
      pWithB[e.payedBy.toString()].balance += e.amount
    })
    console.log("debug reports", es)
    console.log("debug reports", Object.keys(pWithB).map(id => pWithB[id].balance))

    let data: Array<whoPaysToWhome> = []
    const minCashFlow = (amount: Array<number>, ids) => {

      const minCashFlowRec = (amount: Array<number>) => {
        console.log("debug reports", amount)
        const mxCredit = amount.reduce((iMax, x, i, amount) => x > amount[iMax] ? i : iMax, 0);
        const mxDebit = amount.reduce((iMax, x, i, amount) => x < amount[iMax] ? i : iMax, 0);
        if (amount[mxCredit] == 0 && amount[mxDebit] == 0)
          return;
        const min = Math.min(-amount[mxDebit], amount[mxCredit]);
        amount[mxCredit] -= min;
        amount[mxDebit] += min;
        data.push({
          amount: min,
          pid: ids[mxDebit],
          paysToId: ids[mxCredit]
        })
        // console.log("debug reports Person " + mxDebit + " pays " + min  + " to " + "Person " + mxCredit);
        minCashFlowRec(amount);
      }

      minCashFlowRec(amount)
    }

    minCashFlow(Object.keys(pWithB).map(id => pWithB[id].balance), ids)
    data.forEach(d => console.log("debug reports", pWithB[d.pid].name, pWithB[d.paysToId].name))
    return { data, pWithB }
  }
)