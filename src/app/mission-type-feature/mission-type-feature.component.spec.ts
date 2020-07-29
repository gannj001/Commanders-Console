import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTypeFeatureComponent } from './mission-type-feature.component';

describe('MissionTypeFeatureComponent', () => {
  let component: MissionTypeFeatureComponent;
  let fixture: ComponentFixture<MissionTypeFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTypeFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTypeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
