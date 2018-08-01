import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview} from '../../interfaces/linkpreview.interface';
import {MatLinkPreviewService} from '../../service/mat-link-preview.service';

@Component({
  selector: 'mat-link-preview',
  templateUrl: './mat-link-preview.component.html',
  styleUrls: ['./mat-link-preview.component.scss']
})
export class MatLinkPreviewComponent implements OnInit, OnDestroy {

  @Input() link: Link;
  @Input() linkPreview: LinkPreview;
  loaded: boolean;
  private _subscription: Subscription;

  constructor(public linkPreviewService: MatLinkPreviewService) {
  }

  ngOnInit(): void {
    if (this.link && !this.linkPreview) {
      this.loaded = false;
      this._subscription = this.linkPreviewService
        .fetchLink(this.link.href)
        .subscribe(value => {
          this.linkPreview = value;
          this.loaded = true;
        });
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
