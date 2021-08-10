import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBookWithUsComponent } from './why-book-with-us.component';

describe('WhyBookWithUsComponent', () => {
  let component: WhyBookWithUsComponent;
  let fixture: ComponentFixture<WhyBookWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBookWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyBookWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
