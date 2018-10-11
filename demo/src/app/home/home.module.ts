import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLinkPreviewModule} from '@angular-material-extensions/link-preview';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    MatLinkPreviewModule.forRoot(),
    AppSharedModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
