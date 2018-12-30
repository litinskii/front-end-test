import { MAIN_URL } from "../configuration/settings";

const home = async () => await driver.get(`${MAIN_URL}`);
const first = async () => await driver.get(`${MAIN_URL}/first-page/`);

export { home, first };
