import "chromedriver";
import webdriver from "selenium-webdriver";
import assert from "assert";
const FAILED_TESTS = {};

//process.on("uncaughtException", error => {
//  console.log("Global error handler... " + error);
//  if (global.driver) {
//    // global.driver.takeScreenshot()
//    //   .then((img) => {
//    //     //TODO: generate correct image name
//    //     //fs.writeFileSync('/tmp/test.png', new Buffer(img, 'base64'));
//    //     //global.driver.quit();
//    //   });
//  }
//});
//process.on("unhandledRejection", function(reason, p) {
//  console.error("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
//});

before(async () => {
  global.driver = new webdriver.Builder()
    .forBrowser("chrome")
    .withCapabilities(
      webdriver.Capabilities.chrome().set("goog:chromeOptions", {
        args: ["--no-sandbox", "--ignore-certificate-errors"]
      })
    )
    .build();

  await global.driver
    .manage()
    .window()
    .maximize();
});

//beforeEach(function() {
//  if (FAILED_TESTS[this.currentTest.file]) {
//    this.skip();
//  }
//});

after(done => {
  global.driver.quit().then(done);
});

//afterEach(function() {
//  if (this.currentTest.state === "failed") {
//    FAILED_TESTS[this.currentTest.file] = true;
//  }
//});
