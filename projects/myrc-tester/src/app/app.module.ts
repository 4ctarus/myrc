import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrawerComponent, DRAWER_CONFIG, DrawerConfigI } from 'projects/myrc-lib/src/lib/drawer/drawer.component';
import { MyrcLibModule } from 'projects/myrc-lib/src/public_api';
import { LoginComponent } from 'projects/myrc-lib/src/lib/auth/login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: DrawerComponent

  },
  {
    path: 'login',
    component: LoginComponent

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
  menuIcon: 'menu',
  menuItems: [
    {
      iconUrl: 'home',
      label: 'BUTTON.HOME',
      path: '/'
    },
    {
      iconUrl: 'help',
      label: 'BUTTON.HELP',
      path: '/help'
    }
  ]
} as DrawerConfigI;

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
  providers: [{
    provide: DRAWER_CONFIG, useValue: APP_DRAWER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }