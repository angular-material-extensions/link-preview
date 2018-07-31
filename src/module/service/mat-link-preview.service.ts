import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/internal/Subscription';
import {map} from 'rxjs/operators';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview} from '../..';

@Injectable()
export class MatLinkPreviewService implements OnDestroy {

  private _accessKey = '5b54e80a65c77848ceaa4630331e8384950e09d392365';
  private _apiURL = 'http://api.linkpreview.net/';

  subscription: Subscription;
  onLinkFound: EventEmitter<Array<Link>> = new EventEmitter<Array<Link>>();

  links: Link[] = [];

  constructor(private http: HttpClient) {
    this.onLinkFound.subscribe((links: Array<Link>) => this.links = links);
  }

  ngOnDestroy(): void {
  }

  fetchLink(url: string): Observable<LinkPreview> {
    console.log('fetching the following link: ', url);
    const params = new HttpParams()
      .append('key', this._accessKey)
      .append('q', url);

    return this.http.get(this._apiURL, {params: params}).pipe(map(value => value as LinkPreview));
  }
}
