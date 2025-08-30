import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCounter } from './parent-counter';

describe('ParentCounter', () => {
  let component: ParentCounter;
  let fixture: ComponentFixture<ParentCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
