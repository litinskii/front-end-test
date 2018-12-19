import { MAIN_URL } from "../configuration/settings";

const home = async () => await driver.get(`${MAIN_URL}`);

export { home };
