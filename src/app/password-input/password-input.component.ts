import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordIndicatorComponent } from '../password-indicator/password-indicator.component';
import { PasswordService, PasswordStrength } from '../services/password.service';


@Component({
  standalone: true,
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  imports: [
    ReactiveFormsModule, PasswordIndicatorComponent
  ],
})
export class PasswordInputComponent {
  loginForm = new FormGroup({
    password: new FormControl('')
  });
  showPassword: boolean = false;
  passwordStrength: PasswordStrength = PasswordStrength.Empty;

  constructor(private passwordService: PasswordService) {
  }

  onInputChange() {
    this.passwordStrength = this.passwordService.getPasswordStrength(this.loginForm.value.password);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}