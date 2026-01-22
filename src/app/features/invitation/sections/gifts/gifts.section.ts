import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'inv-gifts-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gifts.section.html',
  styleUrl: './gifts.section.scss',
})
export class GiftsSection {
  @Input({ required: true }) accounts!: {
    bank: string;
    type: string;
    number: string;
    name: string;
    id: string;
    icon: string;
  }[];

  @Input({ required: true }) rsvpUrl!: string;
}
