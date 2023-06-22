import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { TokenService } from '@services/token.service';
import { AuthResponse } from '@models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiURL}/auth/login`, {
      email,
      password
    })
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
  }

  logout() {
    this.tokenService.removeToken();
  }
}
