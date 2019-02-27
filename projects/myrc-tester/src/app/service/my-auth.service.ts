import { Injectable } from '@angular/core';
import { AuthService } from 'projects/myrc-lib/src/lib/auth/auth.service';
import { Validators } from '@angular/forms';
import { TYPE } from 'projects/myrc-lib/src/lib/formbuilder/formbuilder.component';

@Injectable()
export class MyAuthService extends AuthService {

  constructor() {
    console.log('my auth service');
    super();

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
  }
}
