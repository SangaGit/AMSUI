import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperAdminComponent } from './supper-admin.component';

describe('SupperAdminComponent', () => {
  let component: SupperAdminComponent;
  let fixture: ComponentFixture<SupperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
