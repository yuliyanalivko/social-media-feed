import { PostComment } from "./post-comment.type";

export interface Post {
    id: number,
    author: string,
    createdOn: Date,
    content: string,
    avatar: string,
    likes: number[], // user's ids
    comments: PostComment[]
  }