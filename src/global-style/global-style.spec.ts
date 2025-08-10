import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStyle } from './global-style';

describe('GlobalStyle', () => {
  let component: GlobalStyle;
  let fixture: ComponentFixture<GlobalStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
