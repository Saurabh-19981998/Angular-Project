import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQueryItem } from './content-query-item';

describe('ContentQueryItem', () => {
  let component: ContentQueryItem;
  let fixture: ComponentFixture<ContentQueryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentQueryItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentQueryItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
