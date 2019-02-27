import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Form, TYPE } from '../formbuilder/formbuilder.component';

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

  constructor() { }

  login(fg: FormGroup) {
    console.log(fg);
  }
}
