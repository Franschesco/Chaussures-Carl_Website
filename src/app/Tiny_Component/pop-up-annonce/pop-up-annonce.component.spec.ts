import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAnnonceComponent } from './pop-up-annonce.component';

describe('PopUpAnnonceComponent', () => {
  let component: PopUpAnnonceComponent;
  let fixture: ComponentFixture<PopUpAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAnnonceComponent]
    });
    fixture = TestBed.createComponent(PopUpAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
