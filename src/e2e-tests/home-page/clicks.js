import { dom } from "../../utils";

export default () => {
  it("counter value on Home Page should be 0", async () => {
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 0");
  });

  it("should update counter to 1 after click on Home Page", async () => {
    await dom.clickWhenPossible({ css: ".e2e-home" });
    await dom.waitUntilElementTextIs({ css: ".e2e-home-clicked-counter" }, "Home clicks: 1");
  });

  it("should throw Error and then skip steps", async () => {
    throw new Error("Throw error to show how to skip step");
  });

  it("should skip step", async () => {});

  it("should skip another step", async () => {});
};
