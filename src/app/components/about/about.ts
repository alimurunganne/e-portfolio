import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggle],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  activeAccordion: number | null = null;
  currentCertificate = 0;
  profilePhoto = 'assets/profile.jpg';

  certificates = [
    { title: 'Legacy Responsive Web Design V8 (August 2024)', image: 'assets/responsive_web_fcc.png' },
    { title: 'Legacy JavaScript Algorithms and Data Structures V7 (October 2025)', image: 'assets/js_legacy_fcc.png' },
    { title: 'Back End Development and APIs V8 (October 2025)', image: 'assets/backend_api_fcc.png' }
  ];

  badges = [
    { name: 'Python Essentials 1', image: 'assets/python-badge-1.png' },
    { name: 'JavaScript Essentials 1', image: 'assets/js_essentials_1.png' },
    { name: 'CCNA Introduction to Networks', image: 'assets/CCNA_ITN_1.png' },
    { name: 'JavaScript & Node.js Explorer', image: 'assets/level_1_badge-js_node.png' }
  ];

  toggleAccordion(index: number): void {
    this.activeAccordion = this.activeAccordion === index ? null : index;
  }

  nextCertificate(): void {
    this.currentCertificate = (this.currentCertificate + 1) % this.certificates.length;
  }

  prevCertificate(): void {
    this.currentCertificate = this.currentCertificate === 0
      ? this.certificates.length - 1
      : this.currentCertificate - 1;
  }
}