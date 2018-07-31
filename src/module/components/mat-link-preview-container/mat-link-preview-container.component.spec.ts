import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventEmitter} from '@angular/core';
import {Link} from 'ngx-linkifyjs';
import {MatLinkPreviewContainerComponent} from './mat-link-preview-container.component';
import {MatLinkPreviewService, MatLinkPreviewComponent} from '../../..';
import {MatLinkPreviewModule} from '../../../../dist';

describe('MatLinkPreviewContainerComponent', () => {
  let component: MatLinkPreviewContainerComponent;
  let fixture: ComponentFixture<MatLinkPreviewContainerComponent>;
  const linkPreviewServicePartial: Partial<MatLinkPreviewService> = {
    onLinkFound: new EventEmitter<Array<Link>>()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatLinkPreviewModule],
      declarations: [MatLinkPreviewContainerComponent],
      providers: [{provide: MatLinkPreviewService, useValue: linkPreviewServicePartial}]
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
