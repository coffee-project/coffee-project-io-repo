import { browser, element, by } from 'protractor';

export class CoffeeProject.Github.IoSrcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
