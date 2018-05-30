import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-admin-user-item',
  templateUrl: './admin-user-item.component.html',
  styleUrls: ['./admin-user-item.component.scss']
})
export class AdminUserItemComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit() {}
}
