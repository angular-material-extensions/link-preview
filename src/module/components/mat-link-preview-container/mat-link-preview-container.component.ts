import {Component, OnInit} from '@angular/core';
// import {MatLinkPreviewService} from '../../..';
import {Link} from 'ngx-linkifyjs';

@Component({
  selector: 'mat-link-preview-container',
  templateUrl: './mat-link-preview-container.component.html',
  styleUrls: ['./mat-link-preview-container.component.scss']
})
export class MatLinkPreviewContainerComponent implements OnInit {



  ngOnInit() {
  }

  trackLinks(index: number, link: Link) {
    return link ? link.href : undefined;
  }
}
