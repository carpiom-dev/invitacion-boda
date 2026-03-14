import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';

import { CountdownComponent } from '../../components/countdown/countdown.component';

@Component({
  selector: 'inv-hero-section',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss',
})
export class HeroSection implements AfterViewInit, OnDestroy {
  @Input({ required: true }) bride!: string;
  @Input({ required: true }) groom!: string;
  @Input({ required: true }) dateLabel!: string;
  @Input({ required: true }) targetIso!: string;
  @Input() admissions = 1;
  private audio?: HTMLAudioElement;
  playing = false;
  private initialized = false;

  // ── Slideshow ──────────────────────────────────────────────
  photos = [
    'assets/img/foto1.jpeg',
    'assets/img/foto2.jpeg',
    'assets/img/foto3.jpeg',
  ];
  activeSlide = 0;
  fadingOut = false;
  private slideInterval?: ReturnType<typeof setInterval>;

  ngAfterViewInit() {
    this.startSlideshow();
    const unlock = () => {
      if (this.initialized) return;

      this.audio = new Audio('assets/audio/song.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.6;

      this.audio.play()
        .then(() => {
          this.playing = true;
          this.initialized = true;
          cleanup();
        })
        .catch(() => {
          // navegador aún bloquea
        });
    };

    const cleanup = () => {
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
      window.removeEventListener('scroll', unlock);
    };

    window.addEventListener('touchstart', unlock, { once: true });
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('scroll', unlock, { once: true });
  }

  toggleMusic(event?: Event) {
    event?.stopPropagation(); // 👈 MUY IMPORTANTE

    if (!this.audio) return;

    if (this.audio.paused) {
      this.audio.play()
        .then(() => this.playing = true)
        .catch(() => this.playing = false);
    } else {
      this.audio.pause();
      this.playing = false;
    }
  }

  // ── Slideshow helpers ──────────────────────────────────────
  private startSlideshow() {
    this.slideInterval = setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.fadingOut = true;
    setTimeout(() => {
      this.activeSlide = (this.activeSlide + 1) % this.photos.length;
      this.fadingOut = false;
    }, 500); // duración del fade-out
  }

  goToSlide(i: number) {
    if (i === this.activeSlide) return;
    this.fadingOut = true;
    setTimeout(() => {
      this.activeSlide = i;
      this.fadingOut = false;
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
}
