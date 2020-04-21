import { Expense } from '../../expenses/store/expense.model';

export interface Groups {
  id: string;
  name : string;
  expenseIds: Array<string | Expense>;
}