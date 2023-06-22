import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor( private router?: Router ){}

  canActivate(tokenService: TokenService, route: string): boolean {
    const token = tokenService.getToken();
    if (!token) {
      this.router?.navigate([route]);
      return false;
    }
    return true;
  }

  canMatch(tokenService: TokenService, route: string): boolean {
    const token = tokenService.getToken();
    if (token) {
      this.router?.navigate([route]);
    }
    return true;
  }
}
