import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/invitation/pages/invitation.page').then(m => m.InvitationPage),
  },
  { path: '**', redirectTo: '' },
];
