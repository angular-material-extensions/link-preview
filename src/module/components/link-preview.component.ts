import {Component} from '@angular/core';
import {Link} from 'ngx-linkifyjs';

@Component({
  selector: 'mat-component',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss']
})
export class LinkPreviewComponent {
  description = 'Angular open source UI library to preview web links';

  link: Link;

}
