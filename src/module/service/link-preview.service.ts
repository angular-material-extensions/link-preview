import { Injectable } from '@angular/core';

@Injectable()
export class LinkPreviewService {
  constructor() { }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
