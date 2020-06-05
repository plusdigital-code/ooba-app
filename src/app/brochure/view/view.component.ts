import { Component } from '@angular/core';
import { FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent extends FormioResourceViewComponent { }
