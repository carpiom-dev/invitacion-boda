import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InvitationConfigService } from '../../../core/services/invitation-config.service';
import { HeroSection } from '../sections/hero/hero.section';
import { ScheduleSection } from '../sections/schedule/schedule.section';
import { GiftsSection } from '../sections/gifts/gifts.section';

@Component({
  selector: 'app-invitation-page',
  standalone: true,
  imports: [CommonModule, HeroSection, ScheduleSection, GiftsSection],
  templateUrl: './invitation.page.html',
  styleUrl: './invitation.page.scss',
})
export class InvitationPage {
  private readonly configSvc = inject(InvitationConfigService);
  private readonly route = inject(ActivatedRoute);

  readonly config = this.configSvc.config;

  bride = this.config.couple.bride;
  groom = this.config.couple.groom;

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.bride =
        params.get('bride')
          ? decodeURIComponent(params.get('bride')!)
          : this.config.couple.bride;

      this.groom =
        params.get('groom')
          ? decodeURIComponent(params.get('groom')!)
          : this.config.couple.groom;
    });
  }
}
