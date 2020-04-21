import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as todoActions from '../todos.actions';
import { selectTodos, selectRemoveDoneTodosDisabled, selectTodosState } from '../todos.selectors';
import { Todo, TodosFilter } from '../todos.model';
import { HomeService } from '../../home.service';

@Component({
  selector: 'todos',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {
  
  todos$: Observable<Todo[]>;
  removeDoneDisabled$: Observable<boolean>;
  newTodo = '';

  constructor(
    public store: Store,
    public snackBar: MatSnackBar,
    private service: HomeService
  ) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodos));
    this.store.pipe(select(selectTodosState)).subscribe(todo => {
      console.log("subscribed -> ", todo);
    })
    console.log(this.todos$)
    this.removeDoneDisabled$ = this.store.pipe(
      select(selectRemoveDoneTodosDisabled)
    );
  }

  get isAddTodoDisabled() {
    return this.newTodo.length < 4;
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onNewTodoClear() {
    this.newTodo = '';
  }

  onAddTodo() {
    this.store.dispatch(todoActions.actionTodosAdd(this.newTodo));
    this.newTodo = '';
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(todoActions.actionTodosToggle({ id: todo.id }));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(todoActions.actionTodosRemoveDone());
  }

  onFilterTodos(filter: TodosFilter) {
    this.store.dispatch(todoActions.actionTodosFilter({ filter }));
  }
}
