import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayervscompComponent } from './playervscomp.component';

describe('PlayervscompComponent', () => {
  let component: PlayervscompComponent;
  let fixture: ComponentFixture<PlayervscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayervscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayervscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
