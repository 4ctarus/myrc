import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'myrc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFG = new FormGroup({});
  onProcess = false;

  constructor(
    @Inject('AUTH_SERVICE') public authService: AuthService,
    private translate: TranslateService,
    private snackBar: MatSnackBar) { }

  ngOnInit() { }

  onSubmit() {
    this.onProcess = true;
    this.authService.login(this.loginFG.value).subscribe(
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
