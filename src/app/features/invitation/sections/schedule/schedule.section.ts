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
}
