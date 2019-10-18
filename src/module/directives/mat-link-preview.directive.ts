import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Link, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {MatLinkPreviewService} from '../../module/service/mat-link-preview.service';

@Directive({
  selector: '[matLinkPreview]',
  exportAs: '[matLinkPreview]',
})
export class MatLinkPreviewDirective implements OnInit  {
  @Input()
  input: string;

  constructor(public linkifyService: NgxLinkifyjsService,
              public linkPreviewService: MatLinkPreviewService,
              private _elemRef: ElementRef) {
  }

  ngOnInit() {
    this._elemRef.nativeElement.oninput = (inputEvent: any) => {
      setTimeout( () => {
        const data = inputEvent.target.value;
        const links: Link[] = this.linkifyService.find(data);
        this.linkPreviewService.onLinkFound.emit(links);
      }, 2000)
    };
  }

}
