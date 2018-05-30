import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Todo } from '../../core/models/todo';
import { TodoService } from '../../core/todo.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  public todos: Todo[];

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
         todo => {
          this.todos = todo.data;
        },
        err => {
          console.log(err.message);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }


  public checkTodo(currentTodo: Todo) {
    this.todoService.patchTodoCompleted(currentTodo.id, !currentTodo.completed)
      .subscribe(
        todo => {
          console.log('change todo: ' + JSON.stringify(todo));
          this.route.data.subscribe(
            todo => {
              this.todos = todo.data;
            },
            err => {
              console.log(err.message);
            }
          );
        },
        error => {
          console.log('Error: ' + error.message);
        }
      );
  }
}
