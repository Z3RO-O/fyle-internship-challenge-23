import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonRepoCardComponent } from './skeleton-repo-card.component';

describe('SkeletonRepoCardComponent', () => {
  let component: SkeletonRepoCardComponent;
  let fixture: ComponentFixture<SkeletonRepoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonRepoCardComponent]
    });
    fixture = TestBed.createComponent(SkeletonRepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
