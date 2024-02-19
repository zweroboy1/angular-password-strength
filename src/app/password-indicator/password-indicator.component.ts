import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrength } from '../services/password.service';


@Component({
  selector: 'app-password-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-indicator.component.html',
  styleUrl: './password-indicator.component.css'
})
export class PasswordIndicatorComponent {
  @Input() strength: PasswordStrength = PasswordStrength.Empty;
}
