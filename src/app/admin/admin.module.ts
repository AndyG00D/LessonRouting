import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminEditPostComponent } from './admin-edit-post/admin-edit-post.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, NgbPaginationModule],
  declarations: [
    AdminComponent,
    AdminUserComponent,
    AdminEditUserComponent,
    AdminPostComponent,
    AdminEditPostComponent,
    CommentsComponent,
    CommentItemComponent
  ],
  exports: []
})
export class AdminModule {}
