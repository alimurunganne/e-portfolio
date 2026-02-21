import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ThemeToggle],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  formData = { name: '', email: '', message: '' };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', message: '' };
  }
}