import { browser, by, element } from 'protractor';

/**
 * Base test class export
 */
export class AppPage {
  /**
   * URL navigate function
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * Get Title Text for testing
   */
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
