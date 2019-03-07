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
  private _forms: Form[];
  private _fg: FormGroup;
  @Input()
  set fg(fg: FormGroup) {
    this._fg = fg;
    this.init();
  }
  get fg(): FormGroup { return this._fg; }
  @Input()
  set forms(forms: Form[]) {
    // console.log(forms);
    this._forms = forms;
    this.init();
  }
  get forms(): Form[] { return this._forms; }

  constructor() { }

  ngOnInit() { }

  init() {
    if (this.fg && this._forms) {
      this._forms.forEach(form => {
        this.fg.addControl(form.id, new FormControl(form.value, form.validator));
      });
    }
  }
}
