import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainDetailComponent } from './grain-detail.component';

describe('GrainDetailComponent', () => {
  let component: GrainDetailComponent;
  let fixture: ComponentFixture<GrainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
