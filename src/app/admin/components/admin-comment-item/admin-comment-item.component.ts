import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-comment-item',
  templateUrl: './admin-comment-item.component.html',
  styleUrls: ['./admin-comment-item.component.css']
})
export class AdminCommentItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit() {}
}
