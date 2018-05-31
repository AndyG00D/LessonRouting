import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminEditPostComponent } from './admin-edit-post/admin-edit-post.component';
import { AdminCommentItemComponent } from './components/admin-comment-item/admin-comment-item.component';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import { AdminPostItemComponent } from './components/admin-post-item/admin-post-item.component';
import { AdminUserItemComponent } from './components/admin-user-item/admin-user-item.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, AdminRoutingModule, NgbPaginationModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AdminComponent,
    AdminUserComponent,
    AdminEditUserComponent,
    AdminPostComponent,
    AdminEditPostComponent,
    AdminCommentItemComponent,
    AdminCommentsComponent,
    AdminPostItemComponent,
    AdminUserItemComponent,
    AdminHeaderComponent
  ],
  exports: [
    AdminComponent,
    AdminUserComponent,
    AdminEditUserComponent,
    AdminPostComponent,
    AdminEditPostComponent
  ]
})
export class AdminModule {}
