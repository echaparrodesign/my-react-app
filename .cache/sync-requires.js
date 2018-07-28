// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/edgarchaparro/code/my-react-app/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/edgarchaparro/code/my-react-app/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/edgarchaparro/code/my-react-app/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/edgarchaparro/code/my-react-app/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/edgarchaparro/code/my-react-app/.cache/json/layout-index.json"),
  "404.json": require("/Users/edgarchaparro/code/my-react-app/.cache/json/404.json"),
  "index.json": require("/Users/edgarchaparro/code/my-react-app/.cache/json/index.json"),
  "page-2.json": require("/Users/edgarchaparro/code/my-react-app/.cache/json/page-2.json"),
  "404-html.json": require("/Users/edgarchaparro/code/my-react-app/.cache/json/404-html.json")
}