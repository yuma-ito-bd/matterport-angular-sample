import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterportFrameComponent } from './matterport-frame.component';

describe('MatterportFrameComponent', () => {
  let component: MatterportFrameComponent;
  let fixture: ComponentFixture<MatterportFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterportFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterportFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
