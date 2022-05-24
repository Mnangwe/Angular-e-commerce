import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  users: User[] = []
  email: any
  password: any
  repassword: any
  constructor( private userService: UserService, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    let data
    let user = {
      email: this.email,
      password: this.password
    }
    if(this.repassword == this.password){
      data = this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
        this.router.navigate(['/home'])
        return alert('Welcome to our site!')
    }
    
  }
}
