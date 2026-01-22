import { Injectable } from '@angular/core';
import { InvitationConfig } from '../models/invitation.model';

@Injectable({ providedIn: 'root' })
export class InvitationConfigService {
  readonly config: InvitationConfig = {
    couple: {
      bride: 'Madelin Maruri R.',
      groom: 'Ruben Montaño F.'
    },

    date: {
      label: 'SÁBADO 23 DE MAYO DEL 2026',
      iso: '2026-05-23T17:00:00-05:00'
    },

    venue: {
      name: 'Club Social Aerotécnicos FAE',
      address: '16, Santa Leonor, Av Benjamín Rosales',
      mapsUrl: 'https://maps.google.com/?q=Club+Social+Aerot%C3%A9cnicos+FAE'
    },

    timeline: [
      { time: '05:00 PM', title: 'Ceremonia religiosa' },
      { time: '07:00 PM', title: 'Recepción de invitados' },
      { time: '07:30 PM', title: 'Entrada de los novios y brindis' },
      { time: '08:00 PM', title: 'Banquete' },
      { time: '08:30 PM', title: 'Vals de los novios' },
      { time: '09:00 PM', title: 'Lanzamiento del ramo' },
      { time: '09:30 PM', title: 'Hora del baile' },
      { time: '12:00 AM', title: 'Despedida' }
    ],

    dressCode: {
      level: 'Formal',
      paletteHex: [
        '#9FB3D7',
        '#E7EEF9',
        '#C6D5F0',
        '#8E9DB9',
        '#8FB2D6',
        '#7F88C2',
        '#6E7AB8',
        '#C6CFDC',
        '#CBD6EE',
        '#9FB0D0',
        '#E9E9EF',
        '#C9CEDB'
      ]
    },

gifts: {
  accounts: [
    {
      bank: 'Banco Bolivariano',
      type: 'Cuenta de Ahorros',
      number: '1821059695',
      name: 'Ruben Bryan Montaño Freire',
      id: '0932024110',
      icon: 'assets/img/banks/bolivariano.png'
    },
    {
      bank: 'Banco Guayaquil',
      type: 'Cuenta de Ahorros',
      number: '0017656282',
      name: 'Maruri Rodriguez Madelin Jazmany',
      id: '0944140078',
      icon: 'assets/img/banks/guayaquil.jpg'
    },
    {
      bank: 'Banco Pichincha',
      type: 'Cuenta de Ahorros',
      number: '2204989453',
      name: 'Maruri Rodriguez Madelin Jazmany',
      id: '0944140078',
      icon: 'assets/img/banks/pichincha.png'
    }
  ],
  rsvpUrl: 'https://wa.me/593999999999'
}
  };
}
