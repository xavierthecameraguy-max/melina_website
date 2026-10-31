import fs from "node:fs";
import { activeTheme } from "../../lib/theme.js";

// Design preview: scripts/build-demo.mjs builds every design side by side and sets DEMO_HOME
// (the "pick a design" page) and DEMO_DESIGNS (the designs, in order). Each page then gets a bar
// at the top linking to the same page in the previous and next design. In a normal build these
// aren't set and this is null.
const home = process.env.DEMO_HOME;
const ids = (process.env.DEMO_DESIGNS || "").split(",").filter(Boolean);

function design(id) {
  return { id, label: JSON.parse(fs.readFileSync(`src/_data/themes/${id}.json`, "utf8")).label };
}

let demo = null;
if (home && ids.length) {
  const at = ids.indexOf(activeTheme().id);
  demo = {
    home,
    prev: design(ids[(at - 1 + ids.length) % ids.length]),
    next: design(ids[(at + 1) % ids.length]),
  };
}

export default demo;
