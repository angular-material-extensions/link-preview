import { TestBed, inject } from '@angular/core/testing';

import { LinkPreviewService } from './link-preview.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkPreviewService]
    });
  });

  it('should create service', inject([LinkPreviewService], (service: LinkPreviewService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([LinkPreviewService], (service: LinkPreviewService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([LinkPreviewService], (service: LinkPreviewService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
