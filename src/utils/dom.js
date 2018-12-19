import { until } from "selenium-webdriver";
const TIMEOUT = 10000;

const waitUntilElementLocated = async (locator, timeout = TIMEOUT) => await driver.wait(until.elementLocated(locator));

const waitUntilElementTextContains = async (locator, value, timeout = TIMEOUT) =>
  await driver.wait(until.elementTextContains(await waitUntilElementLocated(locator, timeout), value), timeout);

const waitUntilElementTextIs = async (locator, value, timeout = TIMEOUT) =>
  await driver.wait(until.elementTextIs(await waitUntilElementLocated(locator, timeout), value), timeout);

const clickWhenPossible = async (locator, timeout = TIMEOUT) =>
  await driver.wait(() => driver.findElement(locator).then(el => el.click().then(() => true, () => false), () => false), timeout);

export { waitUntilElementLocated, clickWhenPossible, waitUntilElementTextIs, waitUntilElementTextContains };
