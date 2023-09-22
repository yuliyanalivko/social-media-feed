import { Component, OnInit } from '@angular/core';
import { Observable, skipWhile } from 'rxjs';
import { Post } from '../../types/post.type';
import { PostService } from '../services/post.service';
import { State, Store } from '@ngrx/store';
import { selectActivePostId, selectPosts } from '../../store/selectors';
import { FeedState } from '../../store/reducer';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts$: Observable<Post[]>;
  activePostId$: Observable<number | null>;
  posts: Post[];
  activePostId: number;

  private page: number = 1;
  private pageSize: number = 5;

  constructor(
    private postService: PostService,
    private store: Store<State<{ feed: FeedState}>>) {
  }

  ngOnInit(): void {
    this.posts$ = this.getAllPosts();
    this.activePostId$ = this.store.select(selectActivePostId);
  }

  addComment(commentData: { postId: number, content: string }): void {
    const { postId, content } = commentData;
    this.postService.addComment(postId, content);
  }

  addPost(content: string): void {
    this.postService.addPost(content);
  }

  likeUnlike(postId: number): void {
    this.postService.likeUnlike(postId);
  }

  private getAllPosts(): Observable<any> {
    let postsWereFetched = false;

    return this.store.select(selectPosts)
      .pipe(
        skipWhile((posts: Post[]) => {
          if (!posts.length && !postsWereFetched) {
            this.postService.getAllPosts(this.page, this.pageSize);
            postsWereFetched = true;
            return true;
          }
          return !posts.length && !postsWereFetched;
        }),
      );
  }

  onScroll(): void {
    this.page++;
    this.postService.getAllPosts(this.page, this.pageSize);
  }
}
