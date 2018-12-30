import "chromedriver";
import fs from "fs-extra";
import webdriver from "selenium-webdriver";
import addContext from "mochawesome/addContext";
import { getTitlePathWithoutCurrentTest } from "../utils";
const IMAGE_DIR = "./mochawesome-report/images";
const FAILED_TESTS_BY_PARENT = {};

before(async () => {
  global.driver = new webdriver.Builder().forBrowser("chrome").build();

  await driver
    .manage()
    .window()
    .maximize();

  await fs.remove(IMAGE_DIR);
});

beforeEach(function() {
  const titlePathWithoutCurrentTest = getTitlePathWithoutCurrentTest(this.currentTest.titlePath());
  if (FAILED_TESTS_BY_PARENT[titlePathWithoutCurrentTest]) {
    this.skip();
  }
});

after(done => {
  driver.quit().then(done);
});

afterEach(function() {
  const titlePathWithoutCurrentTest = getTitlePathWithoutCurrentTest(this.currentTest.titlePath());
  if (this.currentTest.state === "failed") {
    FAILED_TESTS_BY_PARENT[titlePathWithoutCurrentTest] = true;
  }
});

afterEach(async function() {
  if (this.currentTest.state === "failed") {
    const imageName = `${this.currentTest.title}.png`;

    await fs.outputFile(`${IMAGE_DIR}/${imageName}`, await driver.takeScreenshot(), "base64");
    addContext(this, `images/${imageName}`);
  }
});
