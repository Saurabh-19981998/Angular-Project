import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOptionsParent } from './query-options-parent';

describe('QueryOptionsParent', () => {
  let component: QueryOptionsParent;
  let fixture: ComponentFixture<QueryOptionsParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryOptionsParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryOptionsParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
