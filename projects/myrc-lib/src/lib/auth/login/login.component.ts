import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'myrc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFG = new FormGroup({});
  onProcess = false;

  constructor(@Inject('AUTH_SERVICE') public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.loginForms.forEach(form => {
      this.loginFG.addControl(form.id, new FormControl(form.value, form.validator));
    });
  }

  getForm() {
    console.log(this.loginFG);
  }

  onSubmit() {
    this.onProcess = true;
    this.authService.login(this.loginFG.value);/*.pipe(
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