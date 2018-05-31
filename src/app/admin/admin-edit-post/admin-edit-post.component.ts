import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Post } from '../../core/models/post';
import { PostsService } from '../../core/posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './admin-edit-post.component.html',
  styleUrls: ['./admin-edit-post.component.scss']
})
export class AdminEditPostComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  private post: Post;
  public fg;



  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    // this.fg.get('text').disable();
    // this.fg.get('user').valueChanges.subscribe();
    this.fg = new FormGroup(
      { title: new FormControl('test', [Validators.required, Validators.minLength(10)]),
        body: new FormControl('test', [Validators.required, Validators.minLength(10)])});
  }

  // add(){
  //   this.fg.get('text').patchValue();
  //   this.fg.get('text').setValue();
  // }

  // get(
  //   this.fg.get('text').pipe;
  // )

  ngOnInit(){
    this.route.params
      .pipe(
        tap(() => {
          this.loading$.next(true);
        }),
        takeUntil(this.destroy),
        switchMap(params => this.loadPost(+params['id']))
      )
      .subscribe(
        post => {
          this.post = post;
          this.loading$.next(false);
          // this.fg.get('title').patchValue(post.title);
          // this.fg.get('body').patchValue(post.body);
          this.fg.patchValue(post);
        },
        err => {
          this.loading$.next(false);
        }
      );
  }

  submit(){
    const data = this.fg.value;
    this.postsService.setPost(this.post.id, data).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private loadPost(id) {
    return this.postsService.detail(id);
  }
}
