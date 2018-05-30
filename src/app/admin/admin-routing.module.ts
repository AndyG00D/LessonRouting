import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminEditPostComponent } from './admin-edit-post/admin-edit-post.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

// const routes: Routes = [
//   {path: 'posts', loadChildren:[
//   { path: '', component: AdminPostComponent },
//   { path: ':id', component: AdminEditPostComponent }
//   ]}
// ];

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'users', children: [
          { path: '', component: AdminUserComponent },
          { path: ':id', component: AdminEditUserComponent }
        ]
      },
      {
        path: 'posts', children: [
          { path: '', component: AdminPostComponent },
          { path: ':id', component: AdminEditPostComponent }
        ]
      }
    ]
  }
];

// const routes: Routes = [
//   { path: '', component: AdminComponent, children: [
//       { path: 'posts', component: AdminPostComponent },
//       { path: 'users', component: AdminUserComponent }
//     ]
//   }
// ];
//
// const routes: Routes = [
//       { path: 'posts', component: AdminPostComponent },
//       { path: 'users', component: AdminUserComponent }
//     ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
