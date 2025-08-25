import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOptionsChild } from './query-options-child';

describe('QueryOptionsChild', () => {
  let component: QueryOptionsChild;
  let fixture: ComponentFixture<QueryOptionsChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryOptionsChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryOptionsChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
