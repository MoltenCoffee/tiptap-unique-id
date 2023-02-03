import { swc } from "rollup-plugin-swc3";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const config = {
  input: "src/index.js",
  moduleContext: () => "this",
  output: {
    dir: "dist",
    format: "esm",
    // preserveModules: true,
  },
  plugins: [
    peerDepsExternal(),
    swc({
      minify: true,
      jsc: {
        target: "es2019",
      },
    }),
  ],
};

export default config;
