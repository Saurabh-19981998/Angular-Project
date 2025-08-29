import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerExample } from './view-container-example';

describe('ViewContainerExample', () => {
  let component: ViewContainerExample;
  let fixture: ComponentFixture<ViewContainerExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContainerExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContainerExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
