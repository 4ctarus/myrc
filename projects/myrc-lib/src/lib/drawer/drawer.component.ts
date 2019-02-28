import { Component, OnInit, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export interface IDrawerConfig {
  menuIcon: string;
  menuItems: {
    label: string,
    iconUrl: string,
    path: string
  }[];
}

export const DRAWER_DEFAULT_CONFIG: IDrawerConfig = {
  menuIcon: null,
  menuItems: []
};

@Component({
  selector: 'myrc-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '*'
      })),
      state('closed', style({
        width: '56px'
      })),
      transition('open <=> closed', [
        animate(200)
      ])
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  menuisToggle = false;
  config: IDrawerConfig;

  constructor(@Inject('DRAWER_CONFIG') config: IDrawerConfig) {
    this.config = config;
    console.log(config);
  }

  ngOnInit() {
  }

}
