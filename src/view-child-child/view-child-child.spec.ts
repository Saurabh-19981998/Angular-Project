import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChild } from './view-child-child';

describe('ViewChildChild', () => {
  let component: ViewChildChild;
  let fixture: ComponentFixture<ViewChildChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
