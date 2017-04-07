import { CoffeeProject.Github.IoSrcPage } from './app.po';

describe('coffee-project.github.io-src App', () => {
  let page: CoffeeProject.Github.IoSrcPage;

  beforeEach(() => {
    page = new CoffeeProject.Github.IoSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
