import "chromedriver";
import fs from "fs-extra";
import webdriver from "selenium-webdriver";
import addContext from "mochawesome/addContext";
import assert from "assert";
const FAILED_TESTS = {};
const IMAGE_DIR = "./mochawesome-report/images";

before(async () => {
  global.driver = new webdriver.Builder().forBrowser("chrome").build();

  await global.driver
    .manage()
    .window()
    .maximize();

  await fs.remove(IMAGE_DIR);
});

beforeEach(function() {
  if (FAILED_TESTS[this.currentTest.file]) {
    this.skip();
  }
});

after(done => {
  global.driver.quit().then(done);
});

afterEach(function() {
  if (this.currentTest.state === "failed") {
    FAILED_TESTS[this.currentTest.file] = true;
  }
});

afterEach(async function() {
  if (this.currentTest.state === "failed") {
    const imageName = `${this.currentTest.title}.png`;

    await fs.outputFile(`${IMAGE_DIR}/${imageName}`, await global.driver.takeScreenshot(), "base64");
    addContext(this, `images/${imageName}`);
  }
});
