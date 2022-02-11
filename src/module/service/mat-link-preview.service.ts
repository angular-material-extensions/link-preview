import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview} from '../..';

@Injectable()
export class MatLinkPreviewService {

  private _accessKey = '';
  private _apiURL = 'https://api.linkpreview.net/';

  onLinkFound: EventEmitter<Array<Link>> = new EventEmitter<Array<Link>>();

  links: Link[] = [];

  constructor(private http: HttpClient) {
    this.onLinkFound.subscribe((links: Array<Link>) => this.links = links);
  }

  setAccessKey(accessKey: string) {
    this._accessKey = accessKey;
  }

  fetchLink(url: string): Observable<LinkPreview> {
    const body = { key: this._accessKey, q: url };

    return this.http.post(this._apiURL, body).pipe(map(value => value as LinkPreview));
  }
}
