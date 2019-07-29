import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsComponent } from './ims.component';

describe('ImsComponent', () => {
  let component: ImsComponent;
  let fixture: ComponentFixture<ImsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
