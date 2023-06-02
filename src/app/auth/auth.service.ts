import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();

    if (form.email && form.password) {
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((_) => {
          this.isAuthenticated = true;
          this.router.navigate(['']);
        })
        .catch((err) => {
          console.log(err)
          this.isAuthenticated = false;
        })
        .finally(() => (this.isLoading = false));
    }
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();

    if (form.password !== form.confirmPassword) {
      alert("Password's do not match");
    } else {
      if (form.email && form.password) {
        createUserWithEmailAndPassword(auth, form.email, form.password)
          .then((userData) => {
            console.log(userData);
            this.isAuthenticated = true;
          })
          .catch((err) => {
            console.log(err)
            this.isAuthenticated = false;
          })
          .finally(() => (this.isLoading = false));
      }
    }
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login'])
        this.isAuthenticated = false;
      })
      .catch((err) => console.log(err));
  }
}
