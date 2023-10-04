import { Injectable } from '@angular/core';

const SESSION_KEY = 'user_session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveSession(user: any) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  getSession(): any {
    const sessionData = localStorage.getItem(SESSION_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
  }

  clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

}
