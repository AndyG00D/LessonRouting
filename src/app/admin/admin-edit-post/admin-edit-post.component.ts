import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Post } from '../../core/models/post';
import { PostsService } from '../../core/posts.service';
import { FormControl, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';

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
  public items: any[];
  //   new FormArray([
  //   new FormControl('Nancy', Validators.minLength(2)),
  //   new FormControl('Drew'),
  // ]);



  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    // this.items = new FormGroup({
    //   name: new FormControl( ''),
    //   description:  new FormControl(''),
    //   price:  new FormControl('')
    // });
    // this.fg.get('text').disable();
    // this.fg.get('user').valueChanges.subscribe();
    this.fg = new FormGroup(
      { title: new FormControl('test', [Validators.required, Validators.minLength(10)]),
        body: new FormControl('test', [Validators.required, Validators.minLength(10)]),
        items: new FormArray([this.createItem()])
      });
  }

  // add(){
  //   this.fg.get('text').patchValue();
  //   this.fg.get('text').setValue();
  // }

  // get(
  //   this.fg.get('text').pipe;
  // )

  ngOnInit() {
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

  submit() {
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

  // get items(): FormArray {
  //   return this.fg.get('items') as FormArray;
  // }

  createItem(): FormGroup {
    return new FormGroup({
      name: new FormControl( '', [this.sameField]),
      description:  new FormControl(''),
      price:  new FormControl('')
    });
  }

  addItem(): void {
    // this.items = this.fg.get('items') as FormArray;
    // this.items.push(this.createItem());
    this.fg.get('items').push(this.createItem());
  }

  removeItem(i: number) {
    this.fg.get('items').removeAt(i);
  }


  sameField(control: AbstractControl) {
    if ( control.value.length > 30) {
      return {length: true};
    }
    return null;
  }

}
