import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (
        credential.email == 'david@gmail.com'
        && credential.password == 'david2002'
      ){
        accept('Login correcto');
      } else {
        reject('login incorrecto');
      }
    });
  }
}