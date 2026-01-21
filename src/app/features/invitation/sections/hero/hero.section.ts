import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../../components/countdown/countdown.component';

@Component({
  selector: 'inv-hero-section',
  standalone: true,
  imports: [CommonModule,CountdownComponent],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss',
})
export class HeroSection {
  @Input({ required: true }) bride!: string;
  @Input({ required: true }) groom!: string;
  @Input({ required: true }) dateLabel!: string;
  @Input({ required: true }) targetIso!: string;

  @Input({ required: true }) venueName!: string;
  @Input({ required: true }) venueAddress!: string;
  @Input({ required: true }) mapsUrl!: string;

  audio?: HTMLAudioElement;
  playing = false;

  ngOnInit() {
    // Si no quieres música aún, comenta esto.
    // Requiere: src/assets/audio/song.mp3
    try {
      this.audio = new Audio('assets/audio/song.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.6;
    } catch {
      this.audio = undefined;
    }
  }

  toggleMusic() {
    if (!this.audio) return;
    if (this.playing) this.audio.pause();
    else void this.audio.play();
    this.playing = !this.playing;
  }

  openMaps() {
    window.open(this.mapsUrl, '_blank', 'noopener,noreferrer');
  }
}
