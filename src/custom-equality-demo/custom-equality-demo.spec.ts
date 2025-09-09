import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEqualityDemo } from './custom-equality-demo';

describe('CustomEqualityDemo', () => {
  let component: CustomEqualityDemo;
  let fixture: ComponentFixture<CustomEqualityDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomEqualityDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomEqualityDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
