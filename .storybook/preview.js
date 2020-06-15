import { addParameters } from "@storybook/angular";

const cssReq = require.context("!!raw-loader!../src", true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

const scssReq = require.context("!!raw-loader!../src", true, /.\.scss$/);
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }));
console.log("xxxxx");
console.log(scssTokenFiles);
const lessReq = require.context("!!raw-loader!../src", true, /.\.less$/);
const lessTokenFiles = lessReq
  .keys()
  .map((filename) => ({ filename, content: lessReq(filename).default }));

const svgIconsReq = require.context("!!raw-loader!../src", true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles,
      less: lessTokenFiles,
      svgIcons: svgIconTokenFiles,
    },
  },
});
