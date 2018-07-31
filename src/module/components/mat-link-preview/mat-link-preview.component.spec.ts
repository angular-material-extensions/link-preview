import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, EventEmitter} from '@angular/core';

import {MatLinkPreviewComponent} from './mat-link-preview.component';
import {MatCardModule, MatProgressBarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatLinkPreviewService} from '../../../index';
import {Link} from 'ngx-linkifyjs';

describe('LinkPreviewComponent', function () {
  let de: DebugElement;
  let comp: MatLinkPreviewComponent;
  let fixture: ComponentFixture<MatLinkPreviewComponent>;
  const linkPreviewServicePartial: Partial<MatLinkPreviewService> = {
    onLinkFound: new EventEmitter<Array<Link>>()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatProgressBarModule, FormsModule],
      declarations: [MatLinkPreviewComponent],
      providers: [{provide: MatLinkPreviewService, useValue: linkPreviewServicePartial}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLinkPreviewComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

});
