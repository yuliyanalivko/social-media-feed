import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Post } from '../../types/post.type';
import { FormControl, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnChanges {
  @Input() post: Post;
  @Input() active: boolean;

  @Output() addComment: EventEmitter<{ postId: number, content: string }> = new EventEmitter<{ postId: number, content: string }>();
  @Output() likeUnlike: EventEmitter<number> = new EventEmitter<number>();

  commentsToShowNumber: number = 3;
  commentControl: FormControl = new FormControl('', [Validators.maxLength(128)]);

  private user: User;

  @ViewChild(MatExpansionPanel, {static: true}) matExpansionPanel: MatExpansionPanel;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }

  ngOnChanges(): void {
    if (this.active && this.matExpansionPanel.closed) {
      this.matExpansionPanel.open();
    }
  }

  isLikedByUser(): boolean {
    return this.post.likes.includes(this.user.id);
  }

  increaseCommentsToShowNumber(): void {
    this.commentsToShowNumber += 3;
  }

  resetCommentsToShowNumber(): void {
    this.commentsToShowNumber = 3;
  }

  addNewComment(): void {
    this.addComment.emit({ postId: this.post.id, content: this.commentControl.value.trim() });
    this.commentControl.setValue('');
  }
}
