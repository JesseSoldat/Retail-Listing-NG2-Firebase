import { AngularFirePage } from './app.po';

describe('angular-fire App', function() {
  let page: AngularFirePage;

  beforeEach(() => {
    page = new AngularFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
