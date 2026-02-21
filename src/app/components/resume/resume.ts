import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  ViewChild,
  ElementRef,
  QueryList
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink, ThemeToggle],
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume implements AfterViewInit, OnDestroy {

  // ── Google Drive ──────────────────────────────────────────────
  private googleDriveFileId = '1ZYJp747Q4SinaR-HgvROZXHVSp8oKmRS';
  downloadUrl = `https://drive.google.com/uc?export=download&id=${this.googleDriveFileId}`;
  viewUrl     = `https://drive.google.com/file/d/${this.googleDriveFileId}/view?usp=sharing`;

  // ── Timeline refs ─────────────────────────────────────────────
  @ViewChildren('entry')          entries!: QueryList<ElementRef>;
  @ViewChild('timelineProgress')  progressBar!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;
  private scrollHandler!: () => void;

  ngAfterViewInit(): void {
    // QR Code (delay so DOM is ready)
    setTimeout(() => this.generateQR(), 200);

    // Intersection observer — reveal cards on scroll
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.entries.forEach((ref) => this.observer.observe(ref.nativeElement));

    // Scroll-driven timeline line fill
    this.scrollHandler = () => this.updateProgress();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.updateProgress();
  }

  // ── Timeline progress bar ─────────────────────────────────────
  private updateProgress(): void {
    if (!this.progressBar) return;
    const wrapper = this.progressBar.nativeElement.closest('.timeline-wrapper') as HTMLElement;
    if (!wrapper) return;

    const wrapperTop    = wrapper.getBoundingClientRect().top + window.scrollY;
    const wrapperHeight = wrapper.offsetHeight;
    const scrolled      = window.scrollY + window.innerHeight * 0.6;
    const raw           = (scrolled - wrapperTop) / wrapperHeight;
    const clamped       = Math.min(Math.max(raw, 0), 1);

    this.progressBar.nativeElement.style.height = `${clamped * 100}%`;
  }

  // ── QR Code ───────────────────────────────────────────────────
  private generateQR(): void {
    const existing = document.getElementById('qrcode-script');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id  = 'qrcode-script';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';

    script.onload = () => {
      const container = document.getElementById('qrCanvas');
      if (!container) return;
      container.innerHTML = '';

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      new (window as any).QRCode(container, {
        text:         this.downloadUrl,
        width:        150,
        height:       150,
        colorDark:    isDark ? '#f0ece4' : '#000000',
        colorLight:   isDark ? '#2a2a2a' : '#f5f3ef',
        correctLevel: (window as any).QRCode.CorrectLevel.H
      });
    };

    document.body.appendChild(script);
  }

  // ── Actions ───────────────────────────────────────────────────
  downloadResume(): void {
    const link = document.createElement('a');
    link.href  = this.downloadUrl;
    link.setAttribute('download', 'Anne_Nichole_Alimurung_Resume.pdf');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openResume(): void {
    window.open(this.viewUrl, '_blank');
  }

  // ── Cleanup ───────────────────────────────────────────────────
  ngOnDestroy(): void {
    if (this.observer)      this.observer.disconnect();
    if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
  }
}