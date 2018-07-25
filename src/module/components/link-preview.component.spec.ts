import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {LinkPreviewComponent} from './link-preview.component';
import {MatCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('LinkPreviewComponent', function () {
  let de: DebugElement;
  let comp: LinkPreviewComponent;
  let fixture: ComponentFixture<LinkPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FormsModule],
      declarations: [LinkPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPreviewComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

});
