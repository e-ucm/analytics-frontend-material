import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClassComponent } from './card-class.component';

describe('CardClassComponent', () => {
  let component: CardClassComponent;
  let fixture: ComponentFixture<CardClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
