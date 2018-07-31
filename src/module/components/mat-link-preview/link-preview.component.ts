import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview} from '../../..';
import {LinkPreviewService} from '../../..';

@Component({
  selector: 'mat-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss']
})
export class LinkPreviewComponent implements OnInit, OnDestroy {

  @Input() link: Link;
  linkPreview: LinkPreview;
  loaded: boolean;
  private _subscription: Subscription;

  constructor(public linkPreviewService: LinkPreviewService) {
  }

  ngOnInit(): void {
    this.loaded = false;
    this._subscription = this.linkPreviewService
      .fetchLink(this.link.href)
      .subscribe(value => {
        this.linkPreview = value;
        this.loaded = true;
      });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
