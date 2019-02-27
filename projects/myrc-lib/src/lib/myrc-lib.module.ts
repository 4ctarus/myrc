import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MyrcLibComponent } from './myrc-lib.component';
import { DrawerComponent, DRAWER_DEFAULT_CONFIG } from './drawer/drawer.component';
import { SafePipe } from './safe.pipe';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { IconComponent } from './icon/icon.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyrcMaterialModule } from './myrc-material.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [MyrcLibComponent, DrawerComponent, SafePipe, FormbuilderComponent, IconComponent, LoginComponent, RegisterComponent],
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
    { provide: 'DRAWER_CONFIG', useValue: DRAWER_DEFAULT_CONFIG },
    { provide: 'AUTH_SERVICE', useClass: AuthService }
  ],
  exports: [MyrcLibComponent]
})
export class MyrcLibModule { }
