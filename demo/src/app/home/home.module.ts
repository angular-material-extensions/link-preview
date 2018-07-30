import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatLinkPreviewModule  } from '@angular-material-extensions/link-preview';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        MatLinkPreviewModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
