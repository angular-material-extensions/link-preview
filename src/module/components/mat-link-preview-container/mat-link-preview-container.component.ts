import {Component, Input} from '@angular/core';
import {Link} from 'ngx-linkifyjs';
import {MatLinkPreviewService} from '../../service/mat-link-preview.service';

@Component({
  selector: 'mat-link-preview-container',
  templateUrl: './mat-link-preview-container.component.html',
  styleUrls: ['./mat-link-preview-container.component.scss']
})
export class MatLinkPreviewContainerComponent {

  // to forward
  @Input() color = 'primary'; // accent | warn
  @Input() multiple: boolean;
  @Input() showLoadingsProgress = true;

  constructor(public linkPreviewService: MatLinkPreviewService) {
  }

  trackLinks(index: number, link: Link) {
    return link ? link.href : undefined;
  }
}
