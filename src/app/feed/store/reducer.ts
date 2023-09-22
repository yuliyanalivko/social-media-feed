import { createReducer, on } from '@ngrx/store';
import { addComment, addPost, likeUnlikePost, loadPosts } from './actions';
import { Post } from '../types/post.type';

export interface FeedState {
    posts: Post[];
    activePostId: number
}

export const initialState: FeedState = { posts: [], activePostId: null };

export const postsReducer = createReducer(
    initialState,
    on(loadPosts, (state, { posts, override = true }) => (
        {
            posts: override ? posts : [...state.posts, ...posts],
            activePostId: state.activePostId
        }
    )),
    on(addPost, (state, { post }) => (
        {
            posts: [post, ...state.posts ],
            activePostId: post.id
        }
    )),
    on(addComment, (state, { post }) => (
        {
            posts: [...state.posts.map(p => p.id === post.id ? post : p)],
            activePostId: post.id
        }
    )),
    on(likeUnlikePost, (state, { post }) => (
        {
            posts: [...state.posts.map(p => p.id === post.id ? post : p)],
            activePostId: state.activePostId
        }
    )),
);