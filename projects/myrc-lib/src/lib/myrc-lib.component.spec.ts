import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrcLibComponent } from './myrc-lib.component';

describe('MyrcLibComponent', () => {
  let component: MyrcLibComponent;
  let fixture: ComponentFixture<MyrcLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrcLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrcLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
