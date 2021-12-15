var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  CounterButton: () => CounterButton
});

// src/Button.tsx
var React = __toESM(require("react"));
var Button = () => {
  return /* @__PURE__ */ React.createElement("button", null, "Boop");
};

// src/CounterButton.tsx
var React2 = __toESM(require("react"));
var CounterButton = () => {
  const [count, setCount] = React2.useState(0);
  return /* @__PURE__ */ React2.createElement("div", {
    style: {
      background: `rgba(255,255,255,.05)`,
      borderRadius: `8px`,
      padding: 16
    }
  }, /* @__PURE__ */ React2.createElement("p", null, "This is component iadasdfsdfdffsfsds from ", /* @__PURE__ */ React2.createElement("code", null, "ui")), /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("button", {
    type: "button",
    onClick: () => setCount((c) => c + 1)
  }, "count ", count)));
};
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  CounterButton
});
