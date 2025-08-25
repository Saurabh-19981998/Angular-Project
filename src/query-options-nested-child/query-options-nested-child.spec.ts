import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOptionsNestedChild } from './query-options-nested-child';

describe('QueryOptionsNestedChild', () => {
  let component: QueryOptionsNestedChild;
  let fixture: ComponentFixture<QueryOptionsNestedChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryOptionsNestedChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryOptionsNestedChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
