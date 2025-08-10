import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialText } from './special-text';

describe('SpecialText', () => {
  let component: SpecialText;
  let fixture: ComponentFixture<SpecialText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
