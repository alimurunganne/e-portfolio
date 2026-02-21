import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ theme.isDark ? '☽' : '☼' }}
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      font-size: 2rem;
      font-weight: 900;
      line-height: 1;
      color: var(--text);
      display: flex;
      align-items: center;
      transition: transform 0.2s ease, opacity 0.2s ease;
      user-select: none;
    }

    .theme-toggle:hover {
      transform: scale(1.15);
      opacity: 0.75;
    }
  `]
})
export class ThemeToggle {
  constructor(public theme: ThemeService) {}
}