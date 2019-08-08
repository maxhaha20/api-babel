module.exports = function (api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env'
    ]
  ]

  const ignore = [
    '**/universe/node_modules/'
  ]

  return {
    presets,
    ignore
  }
}
