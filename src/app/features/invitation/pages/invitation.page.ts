import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InvitationConfigService } from '../../../core/services/invitation-config.service';
import { HeroSection } from '../sections/hero/hero.section';
import { ScheduleSection } from '../sections/schedule/schedule.section';
import { GiftsSection } from '../sections/gifts/gifts.section';
import { FooterComponent } from '../sections/footer/footer';

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
  admissions = this.config.couple.Adm;
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

      const admRaw = params.get('adm');
      console.log('admRaw', admRaw);
      const adm = admRaw ? Number(admRaw) : NaN;
      console.log('adm', adm);
      this.admissions = Number.isFinite(adm) && adm > 0 ? Math.floor(adm) : 1;
      console.log('admissions', this.admissions);
    });
  }
}
