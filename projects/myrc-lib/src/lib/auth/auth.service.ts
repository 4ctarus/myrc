import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Form, TYPE } from '../formbuilder/formbuilder.component';

@Injectable()
export class AuthService {
  public readonly loginForms: Form[] = [
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

  constructor() { }

}
