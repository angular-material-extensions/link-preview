import {async, fakeAsync, inject, TestBed} from '@angular/core/testing';

import {LinkPreviewService} from './link-preview.service';
import {HttpClientModule, HttpParams, HttpRequest} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('LinkPreviewService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule],
      providers:
        [
          LinkPreviewService
        ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should create service', inject([LinkPreviewService], (service: LinkPreviewService) => {
    expect(service).toBeTruthy();
  }));

  it(`should send an expected request`, async(inject([LinkPreviewService, HttpTestingController],
    (service: LinkPreviewService, backend: HttpTestingController) => {
      service.fetchLink('github.com').subscribe();

      backend.expectOne((req: HttpRequest<any>) => {
        const params = req.params;

        return req.url === 'http://api.linkpreview.net/'
          && req.method === 'GET'
          && params.get('key') === '5b54e80a65c77848ceaa4630331e8384950e09d392365'
          && params.get('q') === 'github.com';
      }, `Get link info from api`);
    })));

  it(`should emit 'false' for 404 not found`, async(inject([LinkPreviewService, HttpTestingController],
    (service: LinkPreviewService, backend: HttpTestingController) => {
      service.fetchLink('foo').subscribe((next) => {
        expect(next).toBeFalsy();
      });

      backend.expectOne('http://api.linkpreview.net/').flush(null, {status: 404, statusText: 'Not Found'});
    })));

  it(`should emit 'true' for 200 Ok`, async(inject([LinkPreviewService, HttpTestingController],
    (service: LinkPreviewService, backend: HttpTestingController) => {
      service.fetchLink('github.com').subscribe((next) => {
        expect(next).toBeTruthy();
      });

      backend.expectOne('http://api.linkpreview.net/').flush(null, {status: 200, statusText: 'Ok'});
    })));
});
