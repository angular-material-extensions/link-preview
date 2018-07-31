import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLinkPreviewModule} from '@angular-material-extensions/link-preview';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatLinkPreviewModule.forRoot(),
    HomeRoutingModule,
    MatInputModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
