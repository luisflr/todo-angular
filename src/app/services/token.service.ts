import { Injectable } from '@angular/core';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    // localStorage.setItem('token', token)
    setCookie('token-trello', token, { expires: 30, path: '/' });
  }

  getToken() {
    const token = getCookie('token-trello');
    // const token = localStorage.getItem('token')
    return token;
  }

  removeToken() {
    // localStorage.removeItem('token')
    removeCookie('token-trello');
  }
}
