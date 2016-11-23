import { NgCliNetPage } from './app.po';

describe('ng-cli-net App', function() {
  let page: NgCliNetPage;

  beforeEach(() => {
    page = new NgCliNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
