import { ClockAppPage } from './app.po';

describe('clock-app App', () => {
  let page: ClockAppPage;

  beforeEach(() => {
    page = new ClockAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
