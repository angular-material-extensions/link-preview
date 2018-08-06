import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview} from '../..';

@Injectable()
export class MatLinkPreviewService {

  private _accessKey = '5b54e80a65c77848ceaa4630331e8384950e09d392365';
  private _apiURL = 'https://api.linkpreview.net/';

  onLinkFound: EventEmitter<Array<Link>> = new EventEmitter<Array<Link>>();

  links: Link[] = [];

  constructor(private http: HttpClient) {
    this.onLinkFound.subscribe((links: Array<Link>) => this.links = links);
  }

  fetchLink(url: string): Observable<LinkPreview> {
    console.log('fetching the following link: ', url);
    const params = new HttpParams()
      .append('key', this._accessKey)
      .append('q', url);

    return this.http.get(this._apiURL, {params: params}).pipe(map(value => value as LinkPreview));
  }
}
