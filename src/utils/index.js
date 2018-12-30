import * as api from "./api";
import * as dom from "./dom";
import * as page from "./page";

const getTitlePathWithoutCurrentTest = titlePath => {
  const copyOfTitlePath = [...titlePath];
  copyOfTitlePath.pop();
  return copyOfTitlePath.join("/");
};

export { api, dom, page, getTitlePathWithoutCurrentTest };
