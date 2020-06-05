import { Component } from '@angular/core';
import { FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent extends FormioResourceComponent { }
