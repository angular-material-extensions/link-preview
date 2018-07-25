import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LinkPreviewService {

  private _accessKey = '5b54e80a65c77848ceaa4630331e8384950e09d392365';
  private _apiURL = 'http://api.linkpreview.net/';

  constructor(private http: HttpClient) {
  }

  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }

  fetchLink(url: string): Observable<any> {
    const params = new HttpParams()
      .append('key', this._accessKey)
      .append('q', url);

    return this.http.get(this._apiURL, {params: params});
  }
}
