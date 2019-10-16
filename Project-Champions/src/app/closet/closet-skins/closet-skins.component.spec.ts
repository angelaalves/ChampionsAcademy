import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetSkinsComponent } from './closet-skins.component';

describe('ClosetSkinsComponent', () => {
  let component: ClosetSkinsComponent;
  let fixture: ComponentFixture<ClosetSkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetSkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
