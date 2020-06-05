import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { NgAisModule } from 'angular-instantsearch';

const routes: Routes = [
  {
    path: '',
    data: {
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, NgAisModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}
