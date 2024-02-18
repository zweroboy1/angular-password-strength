import { Injectable } from '@angular/core';

export enum PasswordStrength {
  Empty = 'empty',
  Short = 'short',
  Easy = 'easy',
  Medium = 'medium',
  Strong = 'strong',
}

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  getPasswordStrength(password: string | null | undefined): PasswordStrength {
    if (!password || password.length === 0) {
      return PasswordStrength.Empty;
    }

    if (password.length < 8) {
      return PasswordStrength.Short;
    }

    const hasLetters = /\p{L}/u.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^\p{L}\d]/u.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return PasswordStrength.Strong;
    }

    if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      return PasswordStrength.Medium;
    }

    return PasswordStrength.Easy;
  }
}