import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Form, TYPE } from '../formbuilder/formbuilder.component';
import { Observable, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  public loginForms: Form[] = [];
  public registerForms: Form[] = [];
  public recoverForms: Form[] = [];
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
