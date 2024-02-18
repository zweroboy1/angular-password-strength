import { TestBed } from '@angular/core/testing';
import { PasswordService, PasswordStrength } from './password.service';

describe('PasswordService', () => {
  let passwordService: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    passwordService = TestBed.inject(PasswordService);
  });

  const passwordTestCases: { password: string, strength: PasswordStrength }[] = [
    { password: '', strength: PasswordStrength.Empty },
    { password: 'abc', strength: PasswordStrength.Short },
    { password: '5432', strength: PasswordStrength.Short },
    { password: '123aaй!', strength: PasswordStrength.Short },
    { password: 'password', strength: PasswordStrength.Easy },
    { password: 'чемпионат', strength: PasswordStrength.Easy },
    { password: '12345678', strength: PasswordStrength.Easy },
    { password: '!@#$%^&*', strength: PasswordStrength.Easy },
    { password: 'pass@word', strength: PasswordStrength.Medium },
    { password: 'буквы1122', strength: PasswordStrength.Medium },
    { password: '$1111$$$$$', strength: PasswordStrength.Medium },
    { password: 'P@ssw0rd', strength: PasswordStrength.Strong },
    { password: 'ФФ№№№ааа11ssw0rd', strength: PasswordStrength.Strong },
  ];

  passwordTestCases.forEach(testCase => {
    it(`should return ${testCase.strength} for password '${testCase.password}'`, () => {
      const result = passwordService.getPasswordStrength(testCase.password);
      expect(result).toBe(testCase.strength);
    });
  });
});
