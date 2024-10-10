import {
  NotesList_default,
  require_node
} from "/build/_shared/chunk-OWLE2RDQ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-SVZLUBXW.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  createHotContext
} from "/build/_shared/chunk-7CWAZVSQ.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  require_react
} from "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$noteTitle.tsx
var import_node = __toESM(require_node(), 1);

// app/components/NoteContent.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NoteContent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NoteContent.tsx"
  );
  import.meta.hot.lastModified = "1728566343648.109";
}
var NoteContent = ({
  note
}) => {
  _s();
  const [userNote, setUserNote] = (0, import_react.useState)("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New note for ${note.title}: ${userNote}`);
    setUserNote("");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full p-6 bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: note.title }, void 0, false, {
      fileName: "app/components/NoteContent.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: note.content }, void 0, false, {
      fileName: "app/components/NoteContent.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: userNote, onChange: (e) => setUserNote(e.target.value), placeholder: "Leave a note...", className: "w-full h-32 p-2 border border-gray-300 rounded resize-none" }, void 0, false, {
        fileName: "app/components/NoteContent.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600", children: "Add Note" }, void 0, false, {
        fileName: "app/components/NoteContent.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NoteContent.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NoteContent.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s(NoteContent, "/ltpnceaQpWqhZGEUpaFGJXuCNE=");
_c = NoteContent;
var NoteContent_default = NoteContent;
var _c;
$RefreshReg$(_c, "NoteContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/$noteTitle.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\$noteTitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\$noteTitle.tsx"
  );
  import.meta.hot.lastModified = "1728568676333.0261";
}
function NotePage() {
  _s2();
  const {
    note,
    notes
  } = useLoaderData();
  const [sidebarWidth, setSidebarWidth] = (0, import_react3.useState)(250);
  const sidebarRef = (0, import_react3.useRef)(null);
  const isDraggingRef = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current)
        return;
      const newWidth = e.clientX;
      if (newWidth > 150 && newWidth < 500) {
        setSidebarWidth(newWidth);
      }
    };
    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: sidebarRef, className: "bg-gray-200 border-r border-gray-300 relative", style: {
      width: `${sidebarWidth}px`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotesList_default, { notes }, void 0, false, {
        fileName: "app/routes/$noteTitle.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute top-0 right-0 w-1 h-full cursor-col-resize bg-gray-400 opacity-0 hover:opacity-100", onMouseDown: handleMouseDown }, void 0, false, {
        fileName: "app/routes/$noteTitle.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$noteTitle.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NoteContent_default, { note }, void 0, false, {
      fileName: "app/routes/$noteTitle.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/$noteTitle.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$noteTitle.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s2(NotePage, "u7+VZcpTmzw7YMGWLK47tf7LVDA=", false, function() {
  return [useLoaderData];
});
_c2 = NotePage;
var _c2;
$RefreshReg$(_c2, "NotePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NotePage as default
};
//# sourceMappingURL=/build/routes/$noteTitle-XNFMQUUZ.js.map
