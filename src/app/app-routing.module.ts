import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
      },
      {
        path: 'agent',
        loadChildren: './agent/agent.module#AgentModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'brochure',
        loadChildren: './brochure/brochure.module#BrochureModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
