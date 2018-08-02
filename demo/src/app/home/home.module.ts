import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLinkPreviewModule} from '@angular-material-extensions/link-preview';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatLinkPreviewModule.forRoot(),
    FlexLayoutModule,
    HomeRoutingModule,
    MatInputModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
