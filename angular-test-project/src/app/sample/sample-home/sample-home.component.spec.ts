import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHomeComponent } from './sample-home.component';

describe('SampleHomeComponent', () => {
  let component: SampleHomeComponent;
  let fixture: ComponentFixture<SampleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
