import { Injectable } from '@angular/core';
import { InvitationConfig } from '../models/invitation.model';

@Injectable({ providedIn: 'root' })
export class InvitationConfigService {
  readonly config: InvitationConfig = {
    couple: { bride: 'Madelin Maruri R.', groom: 'Ruben Montaño F.' },
    date: { label: 'SÁBADO 23 DE MAYO DEL 2026', iso: '2026-05-23T17:00:00-05:00' },
    venue: {
      name: 'Club Social Aerotécnicos FAE',
      address: '16, Santa Leonor, Av Benjamín Rosales',
      mapsUrl: 'https://maps.google.com/?q=Club+Social+Aerot%C3%A9cnicos+FAE'
    }
  };
}
