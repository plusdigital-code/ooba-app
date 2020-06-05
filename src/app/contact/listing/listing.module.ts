import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
    FormioResource,
    FormioResourceConfig,
    FormioResourceService,
    FormioResourceCreateComponent,
    FormioResourceIndexComponent,
    FormioResourceViewComponent,
    FormioResourceEditComponent,
    FormioResourceDeleteComponent,
    FormioResourceComponent
} from 'angular-formio/resource';
import { FormioGrid } from 'angular-formio/grid';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
    imports: [
        CommonModule,
        FormioModule,
        FormioGrid,
        FormioResource,
        RouterModule.forChild([
            {
                path: '',
                component: FormioResourceIndexComponent
            },
            {
                path: 'new',
                component: FormioResourceCreateComponent
            },
            {
                path: ':id',
                component: FormioResourceComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'view',
                        pathMatch: 'full'
                    },
                    {
                        path: 'view',
                        component: FormioResourceViewComponent
                    },
                    {
                        path: 'edit',
                        component: FormioResourceEditComponent
                    },
                    {
                        path: 'delete',
                        component: FormioResourceDeleteComponent
                    }
                ]
            },
        ])
    ],
    declarations: [ResourceComponent],
    providers: [
        FormioResourceService,
        {
            provide: FormioResourceConfig,
            useValue: {
                name: 'contactProperties',
                form: 'contactproperties',
                parents: [
                  'contact'
                ]
            }
        }
    ]
})
export class ListingModule { }
