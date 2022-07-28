import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputervscompComponent } from './computervscomp.component';

describe('ComputervscompComponent', () => {
  let component: ComputervscompComponent;
  let fixture: ComponentFixture<ComputervscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputervscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputervscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
