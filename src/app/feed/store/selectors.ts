import { createSelector, State } from "@ngrx/store";
import { FeedState } from "./reducer";

const selectFeed = (state: State<{ feed: FeedState }>) => (state as any).feed;

export const selectPosts = createSelector(
    selectFeed,
    (state: FeedState) => state.posts
); 

export const selectActivePostId = createSelector(
    selectFeed,
    (state: FeedState) => state.activePostId
); 
