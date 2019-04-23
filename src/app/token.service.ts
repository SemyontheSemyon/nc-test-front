import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor() { }

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
      JSON.parse(sessionStorage.getItem('AuthAuthorities')).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
