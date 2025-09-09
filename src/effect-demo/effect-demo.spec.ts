import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDemo } from './effect-demo';

describe('EffectDemo', () => {
  let component: EffectDemo;
  let fixture: ComponentFixture<EffectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
