import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MatLinkPreviewModule} from '@angular-material-extensions/link-preview';
import {MatCardModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatInputModule,
        MarkdownModule,
        MatLinkPreviewModule.forRoot()],
      declarations: [HomeComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
