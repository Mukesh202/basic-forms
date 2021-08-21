import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshformComponent } from './moshform.component';

describe('MoshformComponent', () => {
  let component: MoshformComponent;
  let fixture: ComponentFixture<MoshformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoshformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
