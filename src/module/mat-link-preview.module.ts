import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LinkPreviewService } from './service/link-preview.service';

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LinkPreviewService } from './service/link-preview.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [LinkPreviewService]
    };
  }
}
