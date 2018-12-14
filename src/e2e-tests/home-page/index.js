import Clicks from "./clicks";
import { api } from "../../utils";

describe("Home page @home-page", function() {
  before(async () => {
    await api.set("settingsHomePage", { clicksCount: 0 });
  });

  after(async () => {
    await api.set("settingsHomePage", { clicksCount: 0 });
  });

  describe("Clicks", Clicks);
});
