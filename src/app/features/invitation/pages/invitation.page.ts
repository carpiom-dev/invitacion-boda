import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationConfigService } from '../../../core/services/invitation-config.service';
import { HeroSection } from '../sections/hero/hero.section';

@Component({
  selector: 'app-invitation-page',
  standalone: true,
  imports: [CommonModule,HeroSection],
  templateUrl: './invitation.page.html',
  styleUrl: './invitation.page.scss',
})
export class InvitationPage {
  private readonly configSvc = inject(InvitationConfigService);
  readonly config = this.configSvc.config;
}
