import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordIndicatorComponent } from './password-indicator.component';

describe('PasswordIndicatorComponent', () => {
  let component: PasswordIndicatorComponent;
  let fixture: ComponentFixture<PasswordIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
