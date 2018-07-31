import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LinkPreviewService} from './service/link-preview.service';
import {NgxLinkifyjsModule, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatProgressBarModule} from '@angular/material';
import {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
import {LinkPreviewComponent} from './components/mat-link-preview/link-preview.component';
import {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';

// Export module's public API
export {LinkPreview} from './interfaces/linkpreview.interface'
export {LinkPreviewComponent} from './components/mat-link-preview/link-preview.component';
export {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';
export {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
export {LinkPreviewService} from './service/link-preview.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxLinkifyjsModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [LinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective],
  declarations: [LinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [LinkPreviewService, NgxLinkifyjsService]
    };
  }
}
