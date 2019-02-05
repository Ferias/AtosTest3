import { browser, by, element } from 'protractor';

export class AtosPage {

  private entries = {
    text: 'testEntry'
};


  navigateTo() {
    return browser.get('/');
  }
  navigateToFeedback(){
    element(by.cssContainingText('button', 'Feedback')).click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  addEntry(entries: any = this.entries) {
    element(by.name('inputTextField')).sendKeys(entries.text);
    element(by.cssContainingText('button', 'Speichern')).click();
}

  getEntry(entries: any = this.entries) {
    // element(by.name('searchEntryField')).sendKeys(entries.text);
    element(by.cssContainingText('button', 'Suchen')).click();
  }
}
