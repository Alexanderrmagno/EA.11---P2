import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordForgotPage } from './password-forgot.page';

describe('PasswordForgotPage', () => {
  let component: PasswordForgotPage;
  let fixture: ComponentFixture<PasswordForgotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordForgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
