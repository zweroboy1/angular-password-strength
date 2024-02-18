import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordIndicatorComponent } from './password-indicator/password-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordInputComponent, PasswordIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-password-strength';
}
