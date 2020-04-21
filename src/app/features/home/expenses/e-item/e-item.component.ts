import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Expense } from '../store/expense.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../home.state';
import { selectParticipantsEntities } from '../../participants/store/participant.selectors';
import { HomeService } from '../../home.service';

@Component({
  selector: 'e-item',
  templateUrl: './e-item.component.html',
  styleUrls: ['./e-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EItemComponent implements OnInit {

  addParticipantUI:boolean = false;
  data ="ehe";
  allParticipants = this.store.pipe(select(selectParticipantsEntities))
  @Input() expense:Expense;
  @Output() addParticipant = new EventEmitter<Expense>();

  color = "#FFF"
  constructor(public store : Store<State>, private service: HomeService) { }

  ngOnInit(): void {
    //console.log('ngOnInit e-item ', this.expense.name);
  }
  
  ngOnChanges(changes){
    this.color = this.service.getRandomColor()
    //console.log('ngOnChanges e-item ', this.expense.name, changes);
  }
  ngDoCheck(){
    //console.log('ngDoCheck e-item ', this.expense.name);
  }
  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked e-item ', this.expense.name)
  }
  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked e-item ', this.expense.name);
  }
  ngOnDestroy(){
    //console.log('ngOnDestory e-item ', this.expense.name);
  }


  addPartUI(){
    this.addParticipantUI = true;
  }
  
  addPartEvent(expense:Expense){
    this.addParticipantUI = true;
    this.addParticipant.emit(expense);
  }

}
