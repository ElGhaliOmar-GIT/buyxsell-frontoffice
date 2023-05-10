import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadminxclientComponent } from './testadminxclient.component';

describe('TestadminxclientComponent', () => {
  let component: TestadminxclientComponent;
  let fixture: ComponentFixture<TestadminxclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestadminxclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestadminxclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
