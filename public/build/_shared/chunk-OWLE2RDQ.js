import {
  Link
} from "/build/_shared/chunk-SVZLUBXW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  createHotContext
} from "/build/_shared/chunk-7CWAZVSQ.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/NotesList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NotesList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NotesList.tsx"
  );
  import.meta.hot.lastModified = "1728567517326.9453";
}
var NotesList = ({
  notes
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full overflow-y-auto", children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${note.title.toLowerCase()}`, className: "block p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300", children: note.title }, note.id, false, {
    fileName: "app/components/NotesList.tsx",
    lineNumber: 27,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/components/NotesList.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = NotesList;
var NotesList_default = NotesList;
var _c;
$RefreshReg$(_c, "NotesList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  NotesList_default
};
//# sourceMappingURL=/build/_shared/chunk-OWLE2RDQ.js.map
