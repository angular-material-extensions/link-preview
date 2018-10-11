import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [RouterModule,
    NgbCollapseModule.forRoot(),
    MarkdownModule.forChild(),
    FlexLayoutModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    FlexLayoutModule,
    MarkdownModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
