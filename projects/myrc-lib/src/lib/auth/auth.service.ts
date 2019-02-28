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
      placeholder: 'LIB.LOGIN.INPUT.PLACEHOLDER.EMAIL',
      label: 'LIB.LOGIN.INPUT.LABEL.EMAIL',
      value: null,
      validator: [Validators.required, Validators.email]
    },
    {
      id: 'password',
      type: TYPE.PASSWORD,
      placeholder: 'LIB.LOGIN.INPUT.PLACEHOLDER.PASSWORD',
      label: 'LIB.LOGIN.INPUT.LABEL.PASSWORD',
      value: null,
      validator: [Validators.required]
    }
  ];
  public registerForms: Form[] = [
    {
      id: 'email',
      type: TYPE.TEXT,
      placeholder: 'LIB.REGISTER.INPUT.PLACEHOLDER.EMAIL',
      label: 'LIB.REGISTER.INPUT.LABEL.EMAIL',
      value: null,
      validator: [Validators.required, Validators.email]
    },
    {
      id: 'password',
      type: TYPE.PASSWORD,
      placeholder: 'LIB.REGISTER.INPUT.PLACEHOLDER.PASSWORD',
      label: 'LIB.REGISTER.INPUT.LABEL.PASSWORD',
      value: null,
      validator: [Validators.required]
    }
  ];
  public recoverForms: Form[] = [
    {
      id: 'email',
      type: TYPE.TEXT,
      placeholder: 'LIB.RECOVER.INPUT.PLACEHOLDER.EMAIL',
      label: 'LIB.RECOVER.INPUT.LABEL.EMAIL',
      value: null,
      validator: [Validators.required, Validators.email]
    }
  ];
  public loginUrl: string;
  public recoverPasswordUrl: string;
  public registerUrl: string;

  constructor(protected http: HttpClient) { }

  login(fg: FormGroup): Observable<{}> {
    return timer(1200)
      .pipe(
        switchMap(res => throwError('LIB.ERROR.AUTH'))
      );
  }

  recover(fg: FormGroup): Observable<{}> {
    return timer(1200)
      .pipe(
        switchMap(res => throwError('LIB.ERROR.AUTH'))
      );
  }

  register(fg: FormGroup): Observable<{}> {
    return timer(1200)
      .pipe(
        switchMap(res => throwError('LIB.ERROR.AUTH'))
      );
  }
}
