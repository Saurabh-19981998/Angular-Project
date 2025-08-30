import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGreeting } from './my-greeting';

describe('MyGreeting', () => {
  let component: MyGreeting;
  let fixture: ComponentFixture<MyGreeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGreeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGreeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
