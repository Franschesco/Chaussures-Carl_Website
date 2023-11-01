import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomBarComponent } from './bootom-bar.component';

describe('BootomBarComponent', () => {
  let component: BootomBarComponent;
  let fixture: ComponentFixture<BootomBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootomBarComponent]
    });
    fixture = TestBed.createComponent(BootomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
