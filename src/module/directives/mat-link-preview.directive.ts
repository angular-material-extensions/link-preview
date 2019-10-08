import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Link, NgxLinkifyjsService } from 'ngx-linkifyjs';

import { MatLinkPreviewService } from '../../module/service/mat-link-preview.service';

@Directive({
  selector: '[matLinkPreview]',
  exportAs: '[matLinkPreview]',
})
export class MatLinkPreviewDirective implements OnChanges {
  @Input()
  input: string

  constructor(public linkifyService: NgxLinkifyjsService,
              public linkPreviewService: MatLinkPreviewService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.input && changes.input.currentValue) {
      const data = changes.input.currentValue;
      const links: Link[] = this.linkifyService.find(data);
      this.linkPreviewService.onLinkFound.emit(links);
    }
  }

}
