import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

type CD = { d: string; h: string; m: string; s: string };

@Component({
  selector: 'inv-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnDestroy {
  @Input({ required: true }) targetIso!: string;

  private timer?: number;
  cd: CD = { d: '0', h: '00', m: '00', s: '00' };

  ngOnInit() {
    this.tick();
    this.timer = window.setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) window.clearInterval(this.timer);
  }

  private tick() {
    const target = new Date(this.targetIso).getTime();
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (24 * 3600 * 1000));
    diff -= days * 24 * 3600 * 1000;

    const hours = Math.floor(diff / (3600 * 1000));
    diff -= hours * 3600 * 1000;

    const mins = Math.floor(diff / (60 * 1000));
    diff -= mins * 60 * 1000;

    const secs = Math.floor(diff / 1000);

    this.cd = {
      d: String(days),
      h: String(hours).padStart(2, '0'),
      m: String(mins).padStart(2, '0'),
      s: String(secs).padStart(2, '0'),
    };
  }
}
