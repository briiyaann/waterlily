import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningPage } from './dining.page';

describe('DiningPage', () => {
  let component: DiningPage;
  let fixture: ComponentFixture<DiningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
