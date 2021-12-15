// src/Button.tsx
import * as React from "react";
var Button = () => {
  return /* @__PURE__ */ React.createElement("button", null, "Boop");
};

// src/CounterButton.tsx
import * as React2 from "react";
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
export {
  Button,
  CounterButton
};
