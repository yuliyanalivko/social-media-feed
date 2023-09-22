import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { posts } from '../../mocks/posts.mock';
import { Post } from '../../types/post.type';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { addComment, addPost, likeUnlikePost, loadPosts } from '../../store/actions';
import { PostComment } from '../../types/post-comment.type';
import { User } from 'src/app/types/user.type';
import { UserService } from 'src/app/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private user: User;

  constructor(
    private store: Store,
    private userService: UserService) {
      this.user = this.userService.getCurrentUser();
    }

  likeUnlike(postId: number): Observable<Post> {
    const likedPost = posts.find(post => post.id === postId);

    if (!likedPost) throw new Error('Error occured while liking the post. Please try again.');

    if (likedPost.likes.includes(this.user.id)) {
      likedPost.likes = likedPost.likes.filter(userId => this.user.id !== userId);
    } else {
      likedPost.likes.push(this.user.id);
    }

    this.store.dispatch(likeUnlikePost(({ post: _.cloneDeep(likedPost) })));

    return of(_.cloneDeep(likedPost));
  }

  getAllPosts(page?: number, pageSize?: number): Observable<Post[]> {
    const start = page && pageSize ? (page - 1) * pageSize : 0;
    const end = page && pageSize ? page * pageSize : posts.length;
    const postsResult = posts.slice(start, end);

    this.store.dispatch(loadPosts({ posts: _.cloneDeep(postsResult), override: false }));

    return of(_.cloneDeep(postsResult));
  }

  addComment(postId: number, content: string): Observable<Post> {
    const post = posts.find(p => p.id === postId);

    if (!post) throw new Error('Error occured while adding the comment. Please try again.');

    const newComment = {
      id: post.comments[post.comments.length - 1]?.id + 1 || 1,
      author: this.user.username,
      content,
      createdOn: new Date(),
    }
    post?.comments.push(newComment);

    this.store.dispatch(addComment(({ post: _.cloneDeep(post) })));

    return of(post);
  }

  addPost(content: string): Observable<Post> {
    const newPost = {
      id: posts[posts.length - 1]?.id + 1 || 1,
      author: this.user.username,
      content,
      createdOn: new Date(),
      likes: [] as number[],
      comments: [] as PostComment[],
      avatar: '/assets/images/avatar.png',
    }
    posts.push(newPost);

    this.store.dispatch(addPost({ post: _.cloneDeep(newPost) }))

    return of(newPost);
  }
}
