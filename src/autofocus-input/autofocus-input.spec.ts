import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofocusInput } from './autofocus-input';

describe('AutofocusInput', () => {
  let component: AutofocusInput;
  let fixture: ComponentFixture<AutofocusInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutofocusInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutofocusInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
