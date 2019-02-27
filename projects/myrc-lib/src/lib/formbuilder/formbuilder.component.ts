import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum TYPE {
  'TEXT' = 'text',
  'EMAIL' = 'email',
  'DATE' = 'date',
  'SELECT' = 'select',
  'PASSWORD' = 'password',
  'NUMBER' = 'number',
  'RADIO' = 'radio'
}

export interface Form {
  id: string;
  type: TYPE;
  placeholder: string;
  label?: string;
  icon?: string;
  value?: string | number | boolean;
  validator?: any;
  options?: { // for select or multiple choice input
      value: string | number | boolean,
      label: string,
      icon?: string
  }[];
}

@Component({
  selector: 'myrc-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent implements OnInit {
  TYPE = TYPE;
  _forms: Form[];
  @Input() fg: FormGroup;
  @Input('forms')
  set forms(forms: Form[]) {
    // console.log(forms);
    this._forms = forms;
  }

  constructor() { }

  ngOnInit() { }
}
