import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQueryParent } from './content-query-parent';

describe('ContentQueryParent', () => {
  let component: ContentQueryParent;
  let fixture: ComponentFixture<ContentQueryParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentQueryParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentQueryParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
