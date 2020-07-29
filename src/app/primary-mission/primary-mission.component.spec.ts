import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryMissionComponent } from './primary-mission.component';

describe('PrimaryMissionComponent', () => {
  let component: PrimaryMissionComponent;
  let fixture: ComponentFixture<PrimaryMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
