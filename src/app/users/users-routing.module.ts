import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserResolver } from '../core/user.resolve';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserTodoComponent, resolve: { data: UserResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
