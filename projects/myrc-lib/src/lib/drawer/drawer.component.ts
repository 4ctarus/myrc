import { Component, OnInit, Inject, InjectionToken } from '@angular/core';

export interface DrawerConfigI {
  menuIcon: string;
  menuItems: {
    label: string,
    iconUrl: string,
    path: string
  }[];
}

export const DRAWER_DEFAULT_CONFIG: DrawerConfigI = {
  menuIcon: null,
  menuItems: []
};

export let DRAWER_CONFIG = new InjectionToken<DrawerConfigI>('app.config');

@Component({
  selector: 'myrc-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  menuisToggle = false;
  config: DrawerConfigI;

  constructor(@Inject(DRAWER_CONFIG) config: DrawerConfigI) {
    this.config = config;
    console.log(config);
  }

  ngOnInit() {
  }

}
