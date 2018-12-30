import { dom } from "../../utils";

export default () => {
  it("should have Home link", async () => {
    await dom.waitUntilElementLocated({ css: ".e2e-link-home" });
  });

  it("should have active Home link", async () => {
    await dom.waitUntilElementLocated({ css: ".e2e-link-home.e2e-link-active" });
  });
};
