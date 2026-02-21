import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      <span class="toggle-track">
        <span class="toggle-icon">{{ theme.isDark ? '◑' : '○' }}</span>
        <span class="toggle-thumb" [class.dark]="theme.isDark"></span>
      </span>
      <span class="toggle-label">{{ theme.isDark ? 'Dark' : 'Light' }}</span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .toggle-track {
      position: relative;
      width: 52px;
      height: 28px;
      background-color: var(--border-soft);
      border-radius: 50px;
      border: 2px solid var(--border);
      display: flex;
      align-items: center;
      padding: 0 5px;
      overflow: hidden;
    }

    .toggle-icon {
      font-size: 0.85rem;
      color: var(--text);
      z-index: 1;
      line-height: 1;
      font-weight: 900;
      font-style: normal;
      user-select: none;
    }

    .toggle-thumb {
      position: absolute;
      left: 3px;
      width: 20px;
      height: 20px;
      background-color: var(--border);
      border-radius: 50%;
      transition: left 0.3s ease;
      z-index: 2;
    }

    .toggle-thumb.dark {
      left: 27px;
    }

    .toggle-label {
      font-family: 'DM Serif Display', serif;
      font-size: 0.85rem;
      color: var(--text);
      user-select: none;
    }
  `]
})
export class ThemeToggle {
  constructor(public theme: ThemeService) {}
}