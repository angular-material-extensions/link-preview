import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {MatLinkPreviewService} from './service/mat-link-preview.service';
import {NgxLinkifyjsModule, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatProgressBarModule} from '@angular/material';
import {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
import {MatLinkPreviewComponent} from './components/mat-link-preview/mat-link-preview.component';
import {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';

// Export module's public API
export {LinkPreview} from './interfaces/linkpreview.interface'
export {MatLinkPreviewComponent} from './components/mat-link-preview/mat-link-preview.component';
export {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';
export {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
export {MatLinkPreviewService} from './service/mat-link-preview.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxLinkifyjsModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [MatLinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective],
  declarations: [MatLinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [MatLinkPreviewService, NgxLinkifyjsService]
    };
  }
}
