import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { user } from '../mocks/user.mock';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): User {
    return user;
  }

}
