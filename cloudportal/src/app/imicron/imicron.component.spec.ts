import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImicronComponent } from './imicron.component';

describe('ImicronComponent', () => {
  let component: ImicronComponent;
  let fixture: ComponentFixture<ImicronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImicronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImicronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
