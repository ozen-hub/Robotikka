import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConsoleHeaderComponent } from './main-console-header.component';

describe('MainConsoleHeaderComponent', () => {
  let component: MainConsoleHeaderComponent;
  let fixture: ComponentFixture<MainConsoleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConsoleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainConsoleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
