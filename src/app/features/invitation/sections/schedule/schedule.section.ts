import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'inv-schedule-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.section.html',
  styleUrl: './schedule.section.scss',
})
export class ScheduleSection {
  @Input({ required: true }) timeline!: { time: string; title: string }[];
  @Input({ required: true }) palette!: string[];
  @Input({ required: true }) venueName!: string;
  @Input({ required: true }) venueAddress!: string;
  @Input({ required: true }) mapsUrl!: string;


  openMaps() {
    window.open(this.mapsUrl, '_blank', 'noopener,noreferrer');
  }
}
