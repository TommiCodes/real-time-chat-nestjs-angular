import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUsersComponent } from './select-users.component';

describe('SelectUsersComponent', () => {
  let component: SelectUsersComponent;
  let fixture: ComponentFixture<SelectUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
