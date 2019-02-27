import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form, TYPE } from '../../formbuilder/formbuilder.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'myrc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginFG = new FormGroup({});
  loginForms: Form[] = this.authService.loginForms;
  onProcess = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForms.forEach(form => {
      this.loginFG.addControl(form.id, new FormControl(form.value, form.validator));
    });
  }

  getForm() {
    console.log(this.loginFG);
  }

  onSubmit() {
    /*this.onProcess = true;
    this.authService.login(this.signinFG.value).pipe(
      finalize(() => this.onProcess = false)
    ).subscribe((res) => {
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });*/
  }

}