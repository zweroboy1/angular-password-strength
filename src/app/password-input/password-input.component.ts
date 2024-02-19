import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordIndicatorComponent } from '../password-indicator/password-indicator.component';
import { PasswordService } from '../services/password.service';


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

  constructor(private passwordService: PasswordService) {
  }

  onInputChange() {

    const getPasswordStrength =
      console.log('Input Value:', this.loginForm.value.password);
    this.passwordStrength = this.passwordService.getPasswordStrength(this.loginForm.value.password);
  }
}