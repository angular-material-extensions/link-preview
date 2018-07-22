import { AngularMaterialExtensionsLinkPreviewDemoPage } from './app.po';

describe('@angular-material-extensions/link-preview-demo App', () => {
  let page: AngularMaterialExtensionsLinkPreviewDemoPage;

  beforeEach(() => {
    page = new AngularMaterialExtensionsLinkPreviewDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
