import {Directive, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Link, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {MatLinkPreviewService} from '../..';

@Directive({
  selector: '[matLinkPreview]'
})
export class MatLinkPreviewDirective implements OnInit {

  constructor(public linkifyService: NgxLinkifyjsService,
              public linkPreviewService: MatLinkPreviewService) {
  }

  ngOnInit(): void {
    this._init();
  }

  private _init() {
    fromEvent(document, 'input')
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        map(event => {
          const data = event.target['value'];
          const links: Link[] = this.linkifyService.find(data);
          console.log('data: ', data);
          console.log('links: ', links);
          return links;
        })).subscribe((links) => {
      this.linkPreviewService.onLinkFound.emit(links);
    });
  }

}
