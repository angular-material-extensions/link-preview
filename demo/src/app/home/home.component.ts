import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {LinkPreviewService} from '@angular-material-extensions/link-preview';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title,
              public linkPreviewService: LinkPreviewService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/link-preview');
    // this.linkPreviewService.fetchLink('github.com').subscribe(res => console.log('response: ', res));
  }

  editOnStackBlitz() {
    sdk.openGithubProject('angular-material-extensions/link-preview/tree/master/demo');
  }
}
