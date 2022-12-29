import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessHeaderComponent } from './process-header.component';

describe('ProcessHeaderComponent', () => {
  let component: ProcessHeaderComponent;
  let fixture: ComponentFixture<ProcessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
