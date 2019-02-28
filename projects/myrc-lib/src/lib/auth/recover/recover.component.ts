import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'myrc-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  recoverFG = new FormGroup({});
  onProcess = false;

  constructor(
    @Inject('AUTH_SERVICE') public authService: AuthService,
    private translate: TranslateService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.recoverForms.forEach(form => {
      this.recoverFG.addControl(form.id, new FormControl(form.value, form.validator));
    });
  }

  getForm() {
    console.log(this.recoverFG);
  }

  onSubmit() {
    this.onProcess = true;
    this.authService.recover(this.recoverFG.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        this.snackBar.open(this.translate.instant(err), this.translate.instant('LIB.COMMON.OK'), {
          duration: 3000,
          panelClass: 'myrc-snackbar-error'
        });
      }
    ).add(() => {
      this.onProcess = false;
    });
  }
}
