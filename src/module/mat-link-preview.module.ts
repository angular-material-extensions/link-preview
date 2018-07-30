import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LinkPreviewComponent} from './components/link-preview.component';
import {LinkPreviewService} from './service/link-preview.service';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material';

// Export module's public API
export {LinkPreviewComponent} from './components/link-preview.component';
export {LinkPreviewService} from './service/link-preview.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxLinkifyjsModule,
    MatCardModule,
  ],
  exports: [LinkPreviewComponent],
  declarations: [LinkPreviewComponent]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [LinkPreviewService]
    };
  }
}
