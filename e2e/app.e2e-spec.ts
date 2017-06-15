import { Meldaravaniel.Github.IoPage } from './app.po';

describe('meldaravaniel.github.io App', () => {
  let page: Meldaravaniel.Github.IoPage;

  beforeEach(() => {
    page = new Meldaravaniel.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
