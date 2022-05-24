import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: any
  password: any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    let users = JSON.parse(`${localStorage.getItem('users')}`)
      users.filter((elem: any) => {
        if((!this.email || !this.password) || (elem.email == !this.email || elem.password == !this.password)) return alert("Please ensure that you signing up first")
        else if(elem.email == this.email && elem.password == this.password){
          localStorage.setItem('token', JSON.stringify(elem))
          this.router.navigate(['home'])
          return alert('Welcome back home')
        }
      })
  }
}
