import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, EventEmitter} from '@angular/core';

import {MatLinkPreviewComponent} from './mat-link-preview.component';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatLinkPreviewService} from '../../../index';
import {Link} from 'ngx-linkifyjs';

describe('LinkPreviewComponent', function () {
  let de: DebugElement;
  let comp: MatLinkPreviewComponent;
  let fixture: ComponentFixture<MatLinkPreviewComponent>;
  const linkPreviewServicePartial: Partial<MatLinkPreviewService> = {
    onLinkFound: new EventEmitter<Array<Link>>(),
    links: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatProgressSpinnerModule, MatButtonModule, FormsModule],
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
