import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { Expense } from '../store/expense.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { selectParticipantsEntities, selectParticipantFromId } from '../../participants/store/participant.selectors';
import { HomeService } from '../../home.service';
import { Participant } from '../../participants/store/participant.model';
import { MatMenu } from '@angular/material/menu';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { updatePayedByInExpense, updateNameInExpense, updateAmountInExpense, deleteExpense, removeParticipantInExpenses } from '../store/expense.actions';
import { removeExpenseInGroup } from '../../groups/store/groups.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'e-item2',
  templateUrl: './e-item2.component.html',
  styleUrls: ['./e-item2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EItem2Component implements OnInit, OnChanges, AfterViewInit {

  @Input() expense: Expense;
  @Output() addParticipant = new EventEmitter<Object>();
  @ViewChild(MatMenu) matMenu: MatMenu
  
  addParticipantUI: boolean = false;
  menuParticipants: Participant[] = [];
  menuParticipants$: BehaviorSubject<Participant[]> = new BehaviorSubject<Participant[]>(null);

  color:string = "#FFF"

  showAdd: boolean = true;
  allParticipants: Dictionary<Participant>;
  allParticipants$ = this.store.pipe(select(selectParticipantsEntities))
  payedByParticipant$:Observable<Participant> ;

  editMode:boolean;
  editMode2:boolean;
  constructor(public store: Store<State>, private service: HomeService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    
    if(this.expense.name == ''){
      this.editMode = true;
    }else{
      this.editMode = false;
    }

    if(this.expense.amount == null){
      this.editMode2 = true;
    }else{
      this.editMode2= false;
    }

    this.allParticipants$.subscribe((ps) => {
      this.allParticipants = ps;
      console.log("debug all participants",ps)
      this.updateMenu();
    });

    this.payedByParticipant$ = this.store.pipe(select(selectParticipantFromId(this.expense?.payedBy)))


    this.menuParticipants$.subscribe(e => console.log("debug menu", e))
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("debug -> ", changes);
    this.color = this.service.getRandomColor()
    this.updateMenu();
  }

  updateMenu = () => {
    if(!this.allParticipants)
      return
    const newMenu : Participant[] = Object.keys(this.allParticipants).filter(
      pid => this.expense.participantIds.indexOf(pid) == -1
    ).map(
      pid => this.allParticipants[pid]
    );

    this.menuParticipants$.next(
     newMenu 
    );
    
    this.menuParticipants = newMenu;
    if(newMenu.length == 0){
      this.showAdd = false;
    }else{
      this.showAdd = true;
    }
    console.log("debug updated ", newMenu)
  }

  ngAfterViewInit(): void {
    console.log("debug afterviewinit", this.matMenu._allItems.length);
    if (this.matMenu._allItems.length)
      this.showAdd = true;
    else
      this.showAdd = false;
  }

  addPartUI() {
    this.addParticipantUI = true;
  }

  addPartEvent(expense: Expense, participant: Participant) {
    this.addParticipantUI = true;
    console.log("debug addpart", participant);
    this.addParticipant.emit({ expenseId: expense.id, participantId: participant.id });
  }

  payedByParticipantChange({value}:{value:Participant}){
    console.log(value.id)
    this.store.dispatch(updatePayedByInExpense({
      expenseId : this.expense.id,
      payedById : value.id
    }))
  }

  nameChange(e){
    console.log(e.target.value)
    this.store.dispatch(updateNameInExpense({
      expenseId : this.expense.id,
      name : e.target.value
    }))
  }
  amountChange(e){
    console.log(e.target.value)
    let amount = 0;
    try{
      amount = parseInt(e.target.value);
      this.store.dispatch(updateAmountInExpense({
      expenseId : this.expense.id,
      amount : amount
      }))
    }catch(e){

    }
  }

  deleteExpense(){
    this.store.dispatch(deleteExpense({
      id:this.expense.id
    }))
    if(this.router.snapshot.url[1]){
      this.store.dispatch(removeExpenseInGroup({
        groupId: this.router.snapshot.url[1].toString(),
        expenseId: this.expense.id
      }))

    }
  }

  removeParticipant(p){
    console.log("debug p", p);
    this.store.dispatch(removeParticipantInExpenses({
      expenseId:this.expense.id,
      participantId : p
    }))
  }

  // compareObjects(o1: Participant, o2: Participant): boolean {
  //   return o1.name === o2.name && o1.id === o2.id;
  // }

}
