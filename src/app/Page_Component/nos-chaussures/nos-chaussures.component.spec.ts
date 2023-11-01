import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosChaussuresComponent } from './nos-chaussures.component';

describe('NosChaussuresComponent', () => {
  let component: NosChaussuresComponent;
  let fixture: ComponentFixture<NosChaussuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosChaussuresComponent]
    });
    fixture = TestBed.createComponent(NosChaussuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
