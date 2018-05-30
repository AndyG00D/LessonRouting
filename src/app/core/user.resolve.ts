import { Injectable } from '@angular/core';
// import { TodoService } from './users.service';
import { Observable } from 'rxjs';
// import { User } from './models/admin-user';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TodoService } from './todo.service';
import {Todo} from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Todo[]> {

  constructor(
    private service: TodoService
    // private router: Router
  ) {}

  public   resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Promise <Todo[]> {
    // const id = route.paramMap.get('id');
    return this.service.getUserTodo(route.params.id);
      // .catch(err => {
      //   console.error(err); // deal with API error (eg not found)
      //   this.router.navigate(['/']); // could redirect to error page
      //   return Observable.empty<User>();
      // });
  }
}
