import { AppMavenAngularBundlePage } from './app.po';

describe('app-maven-angular-bundle App', () => {
  let page: AppMavenAngularBundlePage;

  beforeEach(() => {
    page = new AppMavenAngularBundlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
