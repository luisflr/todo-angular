import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen: boolean = false;
  isOpenBody: boolean = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
