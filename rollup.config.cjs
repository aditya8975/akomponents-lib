module.exports = {
  input: "src/index.js",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "esm" }
  ],
  plugins: [
    require("@rollup/plugin-node-resolve")(),
    require("@rollup/plugin-commonjs")(),
    require("@rollup/plugin-babel").default({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"]
    }),
    require("rollup-plugin-postcss")()
  ],
  external: ["react", "react-dom", "prop-types"] // ✅ Add prop-types here
};
