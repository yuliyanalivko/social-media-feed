import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  @Output() addPost: EventEmitter<string> = new EventEmitter<string>();

  user: User;
  contentControl: FormControl = new FormControl('', [Validators.maxLength(300)]);

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }

  addNewPost(): void {
    this.addPost.emit(this.contentControl.value);
    this.contentControl.setValue('');
  }
}
