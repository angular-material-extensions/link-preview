import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [LibService]
    };
  }
}
