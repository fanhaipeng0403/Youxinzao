// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "postcss-pxtorem": {
      "rootValue": 32,
      "propList": ["*"],
      "selectorBlackList": ["weui-"]
    }
  }
}
