import { createAction, props } from '@ngrx/store';
import { Post } from '../types/post.type';

export const LOAD_POSTS = '[Feed] Load Posts';
export const ADD_POST = '[Feed] Add Post';
export const ADD_COMMENT = '[Feed] Add Comment';
export const LIKE_ULIKE_POST = '[Feed] Like Unlike Post';

export const loadPosts = createAction(
    LOAD_POSTS,
    props<{ posts: Post[], override: boolean }>()
);

export const addPost = createAction(
    ADD_POST,
    props<{ post: Post }>()
);

export const addComment = createAction(
    ADD_COMMENT,
    props<{ post: Post }>()
);

export const likeUnlikePost = createAction(
    LIKE_ULIKE_POST,
    props<{ post: Post }>()
);