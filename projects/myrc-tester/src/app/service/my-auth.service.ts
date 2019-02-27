import { Injectable } from '@angular/core';
import { AuthService } from 'projects/myrc-lib/src/lib/auth/auth.service';
import { Validators, FormGroup } from '@angular/forms';
import { TYPE } from 'projects/myrc-lib/src/lib/formbuilder/formbuilder.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyAuthService extends AuthService {

  constructor(protected http: HttpClient) {
    super(http);

    this.loginForms = [
      {
        id: 'email',
        type: TYPE.TEXT,
        placeholder: 'LIB.INPUT.PLACEHOLDER.EMAIL',
        label: 'LIB.INPUT.LABEL.EMAIL',
        icon: 'email',
        value: null,
        validator: [Validators.required, Validators.email]
      },
      {
        id: 'password',
        type: TYPE.PASSWORD,
        placeholder: 'LIB.INPUT.PLACEHOLDER.PASSWORD',
        label: 'LIB.INPUT.LABEL.PASSWORD',
        icon: 'lock',
        value: null,
        validator: [Validators.required]
      }
    ];

    this.recoverPasswordUrl = '/auth/recover';
  }

  /*login(fg: FormGroup): Observable<{}> {
    return this.http.get('').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('LIB.ERROR.LOGIN');
  }*/
}
