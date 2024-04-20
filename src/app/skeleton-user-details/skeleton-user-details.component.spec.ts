import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonUserDetailsComponent } from './skeleton-user-details.component';

describe('SkeletonUserDetailsComponent', () => {
  let component: SkeletonUserDetailsComponent;
  let fixture: ComponentFixture<SkeletonUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonUserDetailsComponent]
    });
    fixture = TestBed.createComponent(SkeletonUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
