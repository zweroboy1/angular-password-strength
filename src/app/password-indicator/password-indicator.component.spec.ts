import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { PasswordIndicatorComponent } from './password-indicator.component';
import { PasswordStrength } from '../services/password.service';

describe('PasswordIndicatorComponent', () => {
  let component: PasswordIndicatorComponent;
  let fixture: ComponentFixture<PasswordIndicatorComponent>;

  const grayColor = 'rgb(128, 128, 128)';
  const redColor = 'rgb(255, 0, 0)';
  const yellowColor = 'rgb(255, 255, 0)';
  const greenColor = 'rgb(0, 128, 0)';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordIndicatorComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PasswordIndicatorComponent);
    component = fixture.componentInstance;
  });

  it('should set the correct colors for Empty password', () => {
    component.strength = PasswordStrength.Empty;
    fixture.detectChanges();

    const [computedStyles0, computedStyles1, computedStyles2] = getComputedStylesArray(fixture);

    expect(computedStyles0.backgroundColor).toBe(grayColor);
    expect(computedStyles1.backgroundColor).toBe(grayColor);
    expect(computedStyles2.backgroundColor).toBe(grayColor);
  });

  it('should set the correct colors for Short  password', () => {
    component.strength = PasswordStrength.Short;
    fixture.detectChanges();

    const [computedStyles0, computedStyles1, computedStyles2] = getComputedStylesArray(fixture);

    expect(computedStyles0.backgroundColor).toBe(redColor);
    expect(computedStyles1.backgroundColor).toBe(redColor);
    expect(computedStyles2.backgroundColor).toBe(redColor);
  });

  it('should set the correct colors for Easy password', () => {
    component.strength = PasswordStrength.Easy;
    fixture.detectChanges();

    const [computedStyles0, computedStyles1, computedStyles2] = getComputedStylesArray(fixture);

    expect(computedStyles0.backgroundColor).toBe(redColor);
    expect(computedStyles1.backgroundColor).toBe(grayColor);
    expect(computedStyles2.backgroundColor).toBe(grayColor);
  });

  it('should set the correct colors for Medium  password', () => {
    component.strength = PasswordStrength.Medium;
    fixture.detectChanges();

    const [computedStyles0, computedStyles1, computedStyles2] = getComputedStylesArray(fixture);

    expect(computedStyles0.backgroundColor).toBe(yellowColor);
    expect(computedStyles1.backgroundColor).toBe(yellowColor);
    expect(computedStyles2.backgroundColor).toBe(grayColor);
  });

  it('should set the correct colors for Strong password', () => {
    component.strength = PasswordStrength.Strong;
    fixture.detectChanges();

    const [computedStyles0, computedStyles1, computedStyles2] = getComputedStylesArray(fixture);

    expect(computedStyles0.backgroundColor).toBe(greenColor);
    expect(computedStyles1.backgroundColor).toBe(greenColor);
    expect(computedStyles2.backgroundColor).toBe(greenColor);
  });

  function getComputedStylesArray(fixture: ComponentFixture<PasswordIndicatorComponent>) {
    const indicatorSections = fixture.nativeElement.querySelectorAll('.password-indicator__section');
    return [getComputedStyle(indicatorSections[0]), getComputedStyle(indicatorSections[1]), getComputedStyle(indicatorSections[2])];
  }
});