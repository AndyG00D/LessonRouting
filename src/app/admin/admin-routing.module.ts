import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminEditPostComponent } from './admin-edit-post/admin-edit-post.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'user', component: AdminUserComponent },
  { path: 'user/:id', component: AdminEditUserComponent },
  { path: 'post', component: AdminPostComponent },
  { path: 'post/:id', component: AdminEditPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
