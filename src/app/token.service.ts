import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor(private router: Router) { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('AuthToken');
    window.sessionStorage.setItem('AuthToken', token);
  }

  public getToken(): string {
    return sessionStorage.getItem('AuthToken');
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem('AuthUsername');
    window.sessionStorage.setItem('AuthUsername', username);
  }

  public getUsername(): string {
    return sessionStorage.getItem('AuthUsername');
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem('AuthAuthorities');
    window.sessionStorage.setItem('AuthAuthorities', JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem('AuthToken')) {
      const q: string[] = JSON.parse(sessionStorage.getItem('AuthAuthorities'));
      if (q) {
        q.forEach(authority => this.roles.push(authority));
      }
    }

    return this.roles;
  }

  checkAuthorities(authority: string) {
    const roles = this.getAuthorities();
    if (roles.find(role => role === authority) === undefined) {
      this.router.navigate(['/home']);
    }
  }
}
