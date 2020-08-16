import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionViewerComponent } from './mission-viewer.component';

describe('MissionViewerComponent', () => {
  let component: MissionViewerComponent;
  let fixture: ComponentFixture<MissionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
