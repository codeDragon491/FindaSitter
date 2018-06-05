import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSitterComponent } from './rate-sitter.component';

describe('RateSitterComponent', () => {
  let component: RateSitterComponent;
  let fixture: ComponentFixture<RateSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
