import Clicks from "./clicks";
import { api, page } from "../../utils";

describe("Home page @home-page", function() {
  before(async () => {
    await api.set("settingsHomePage", { clicksCount: 0 });
    await page.home();
  });

  describe("Clicks", Clicks);
});
