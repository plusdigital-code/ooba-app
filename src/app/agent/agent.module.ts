import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from 'angular-formio/resource';
@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'agent',
        form: 'agent'
      }
    }
  ]
})
export class AgentModule { }
