import { Injectable } from '@angular/core';
import { User } from '../user';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user: User = {name, email, password}
  constructor() { }

  register(){
    // return this.user
  }
}
