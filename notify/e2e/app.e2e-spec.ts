import { NotifyPage } from './app.po';

describe('notify App', () => {
  let page: NotifyPage;

  beforeEach(() => {
    page = new NotifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
