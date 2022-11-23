// rollup.config.js
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";

import pkg from "./package.json";

export default {
  external: [
    "react",
    "styled-components",
    "@dxc-technology/halstack-client",
    "react-spinners",
    "axios",
    "react-json-view",
  ],
  input: "src/main.js",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: "inline",
    },
  ],
  plugins: [
    postcss({
      modules: true,
    }),
    url(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-proposal-class-properties"],
    }),
  ],
};
