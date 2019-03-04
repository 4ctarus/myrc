import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrawerComponent, IDrawerConfig } from 'projects/myrc-lib/src/lib/drawer/drawer.component';
import { MyrcLibModule } from 'projects/myrc-lib/src/public_api';
import { LoginComponent } from 'projects/myrc-lib/src/lib/auth/login/login.component';
import { MyAuthService } from './service/my-auth.service';
import { RecoverComponent } from 'projects/myrc-lib/src/lib/auth/recover/recover.component';
import { RegisterComponent } from 'projects/myrc-lib/src/lib/auth/register/register.component';
import { AppMaterialModule } from './app-material.module';


const appRoutes: Routes = [
  {
    path: '',
    component: DrawerComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'recover',
        component: RecoverComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const APP_DRAWER_CONFIG = {
  menuIcon: 'angular',
  menuItems: [
    {
      iconUrl: 'home',
      label: 'APP.BUTTON.HOME',
      path: '/'
    },
    {
      iconUrl: 'settings',
      label: 'APP.BUTTON.SETTINGS',
      path: '/settings'
    },
    {
      iconUrl: 'help',
      label: 'APP.BUTTON.HELP',
      path: '/help'
    }
  ]
} as IDrawerConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MyrcLibModule
  ],
  providers: [
    { provide: 'DRAWER_CONFIG', useValue: APP_DRAWER_CONFIG },
    { provide: 'AUTH_SERVICE', useClass: MyAuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
