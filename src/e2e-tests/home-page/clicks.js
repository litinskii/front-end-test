import { dom } from "../../utils";

export default () => {
  it("counter value on Home Page should be 0", async () => {
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 0");
  });

  it("should update counter to 1 after click on Home Page", async () => {
    await dom.clickWhenPossible({ css: ".e2e-home" });
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 1");
  });

  it("should update counter to 2 after click on Home Page", async () => {
    //await dom.clickWhenPossible({ css: ".e2e-home" });
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 2");
  });

  it("should update counter to 3 after click on Home Page", async () => {
    await dom.clickWhenPossible({ css: ".e2e-home" });
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 3");
  });

  it("should update counter to 4 after click on Home Page", async () => {
    await dom.clickWhenPossible({ css: ".e2e-home" });
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 4");
  });

  describe("Inner Clicks", () => {
    it("Test 1", async () => {});
    it("Test 2", async () => {});
    it("Test 3", async () => {});
  });
};
