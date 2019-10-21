import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

interface AuthResponseData{
    kind: string,
    idToken: string,
    email: string, 
    refreshToken: string,
    expiresIn: string,
    localId: string;      
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  user = new Subject<User>();

  constructor(private http: HttpClient ) { }

  signup(email: string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvL2aDtNpuhYmP1U9W8JdvuMgCv3Kn0HA',
      {
        email: email,
        password: password,
        returnSecureTOken:true
      }
    ).pipe(catchError(this.handleError),
    tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }));
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'an unknown error occurred';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage='this email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage='This password is not correct';
        break;  
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email:string,userId:string, token:string, expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }
}