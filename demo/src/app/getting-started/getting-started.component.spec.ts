import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GettingStartedComponent} from './getting-started.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MarkdownModule.forRoot(), HttpClientModule],
      declarations: [GettingStartedComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
