import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Form, TYPE } from '../formbuilder/formbuilder.component';
import { Observable, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  public loginForms: Form[] = [
    {
      id: 'email',
      type: TYPE.TEXT,
      placeholder: 'LIB.INPUT.PLACEHOLDER.EMAIL',
      label: 'LIB.INPUT.LABEL.EMAIL',
      value: null,
      validator: [Validators.required, Validators.email]
    },
    {
      id: 'password',
      type: TYPE.PASSWORD,
      placeholder: 'LIB.INPUT.PLACEHOLDER.PASSWORD',
      label: 'LIB.INPUT.LABEL.PASSWORD',
      value: null,
      validator: [Validators.required]
    }
  ];
  public recoverPasswordUrl: string;

  constructor(protected http: HttpClient) { }

  login(fg: FormGroup): Observable<{}> {
    return timer(1200)
      .pipe(
        switchMap(res => throwError('LIB.ERROR.LOGIN'))
      );
  }
}
