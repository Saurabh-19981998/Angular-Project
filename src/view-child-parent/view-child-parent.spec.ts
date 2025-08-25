import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildParent } from './view-child-parent';

describe('ViewChildParent', () => {
  let component: ViewChildParent;
  let fixture: ComponentFixture<ViewChildParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
