import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterportViewComponent } from './matterport-view.component';

describe('MatterportViewComponent', () => {
  let component: MatterportViewComponent;
  let fixture: ComponentFixture<MatterportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
