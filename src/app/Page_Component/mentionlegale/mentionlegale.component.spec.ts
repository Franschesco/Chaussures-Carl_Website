import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionlegaleComponent } from './mentionlegale.component';

describe('MentionlegaleComponent', () => {
  let component: MentionlegaleComponent;
  let fixture: ComponentFixture<MentionlegaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentionlegaleComponent]
    });
    fixture = TestBed.createComponent(MentionlegaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
