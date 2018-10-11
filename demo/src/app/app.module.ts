import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TransferHttpCacheModule} from '@nguniversal/common';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: '@angular-material-extensions/link-preview-demo-id'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    MarkdownModule.forRoot({loader: HttpClient}),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
