import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Form, TYPE } from '../formbuilder/formbuilder.component';

@Injectable()
export class AuthService {
  public readonly loginForms: Form[] = [
    {
      id: 'email',
      type: TYPE.TEXT,
      placeholder: 'email',
      label: 'email',
      icon: 'email',
      value: null,
      validator: [Validators.required, Validators.email]
    },
    {
      id: 'password',
      type: TYPE.PASSWORD,
      placeholder: 'password',
      label: 'password',
      icon: 'lock',
      value: null,
      validator: [Validators.required]
    },
    {
      id: 'test',
      type: TYPE.SELECT,
      placeholder: 'test',
      label: 'test',
      value: null,
      validator: [Validators.required],
      options: [
        {
          label: 'test',
          value: 1
        },
        {
          label: 'test2',
          value: 2
        }
      ]
    },
    {
      id: 'test2',
      type: TYPE.RADIO,
      placeholder: 'test2',
      label: 'test2',
      value: null,
      validator: [Validators.required],
      options: [
        {
          label: 'test',
          value: 1
        },
        {
          label: 'test2',
          value: 2
        }
      ]
    }
  ];
  constructor() { }
}
