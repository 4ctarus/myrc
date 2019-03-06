import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './safe.pipe';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyrcMaterialModule } from './myrc-material.module';
import { AuthService } from './auth/auth.service';
import { RecoverComponent } from './auth/recover/recover.component';

@NgModule({
  declarations: [
    SafePipe,
    FormbuilderComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MyrcMaterialModule
  ],
  providers: [
    { provide: 'AUTH_SERVICE', useClass: AuthService }
  ],
  exports: [
    SafePipe,
    FormbuilderComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ]
})
export class MyrcLibModule { }
