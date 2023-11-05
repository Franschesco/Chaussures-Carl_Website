import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosmarquesComponent } from './nosmarques.component';

describe('NosmarquesComponent', () => {
  let component: NosmarquesComponent;
  let fixture: ComponentFixture<NosmarquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosmarquesComponent]
    });
    fixture = TestBed.createComponent(NosmarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
