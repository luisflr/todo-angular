import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StatusRequest } from '@models/statusRequest.model';
import { AuthService } from '@services/auth.service';
import { columns } from 'src/app/utils/columnsMock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  }
  status: StatusRequest = 'init';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const {email, password} = this.user;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.status = 'success';
        localStorage.setItem('columns', JSON.stringify(columns))
        this.router.navigate(['/board']);
      },
      error: () => {
        this.status = 'error'
      }
    })
  }
}
