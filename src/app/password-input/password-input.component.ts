import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordIndicatorComponent } from '../password-indicator/password-indicator.component';

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

  passwordStrength: any = "";

  constructor() {
  }

  onInputChange() {
    console.log('Input Value:', this.loginForm.value.password);
    this.passwordStrength = this.loginForm.value.password;
  }
}