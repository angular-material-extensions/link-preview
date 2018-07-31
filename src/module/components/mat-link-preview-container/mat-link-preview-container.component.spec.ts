import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatLinkPreviewContainerComponent} from './mat-link-preview-container.component';
import {MatProgressBarModule} from '@angular/material';
import {LinkPreviewService} from '../../..';
import {Link} from 'ngx-linkifyjs';
import {EventEmitter} from '@angular/core';

describe('MatLinkPreviewContainerComponent', () => {
  let component: MatLinkPreviewContainerComponent;
  let fixture: ComponentFixture<MatLinkPreviewContainerComponent>;
  const linkPreviewServicePartial: Partial<LinkPreviewService> = {
    onLinkFound: new EventEmitter<Array<Link>>()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule],
      declarations: [MatLinkPreviewContainerComponent],
      providers: [{provide: LinkPreviewService, useValue: linkPreviewServicePartial}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLinkPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
