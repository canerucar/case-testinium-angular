import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiniumComponent } from './testinium.component';

describe('TestiniumComponent', () => {
  let component: TestiniumComponent;
  let fixture: ComponentFixture<TestiniumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestiniumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
