import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountCreatePage } from './account-create.page';

describe('AccountCreatePage', () => {
  let component: AccountCreatePage;
  let fixture: ComponentFixture<AccountCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
