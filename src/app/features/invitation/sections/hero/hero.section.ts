import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../../components/countdown/countdown.component';

@Component({
  selector: 'inv-hero-section',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss',
})
export class HeroSection implements AfterViewInit {
  @Input({ required: true }) bride!: string;
  @Input({ required: true }) groom!: string;
  @Input({ required: true }) dateLabel!: string;
  @Input({ required: true }) targetIso!: string;
  @Input({ required: true }) venueName!: string;
  @Input({ required: true }) venueAddress!: string;
  @Input({ required: true }) mapsUrl!: string;

  private audio?: HTMLAudioElement;
  playing = false;
  private initialized = false;

  ngAfterViewInit() {
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

  openMaps() {
    window.open(this.mapsUrl, '_blank', 'noopener,noreferrer');
  }
}
