import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LinkPreviewComponent} from './components/link-preview.component';
import {LinkPreviewService} from './service/link-preview.service';
import {NgxLinkifyjsModule, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material';
import {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';

// Export module's public API
export {LinkPreview} from './interfaces/linkpreview.interface'
export {LinkPreviewComponent} from './components/link-preview.component';
export {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
export {LinkPreviewService} from './service/link-preview.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxLinkifyjsModule,
    MatCardModule,
  ],
  exports: [LinkPreviewComponent, MatLinkPreviewDirective],
  declarations: [LinkPreviewComponent, MatLinkPreviewDirective]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [LinkPreviewService, NgxLinkifyjsService]
    };
  }
}
