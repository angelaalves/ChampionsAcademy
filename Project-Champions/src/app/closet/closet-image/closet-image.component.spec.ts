import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetImageComponent } from './closet-image.component';

describe('ClosetImageComponent', () => {
  let component: ClosetImageComponent;
  let fixture: ComponentFixture<ClosetImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
