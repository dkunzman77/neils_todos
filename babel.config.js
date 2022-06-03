module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)
  const plugins = ['neil-is-awesome']

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ]

  if (process.env.NODE_ENV === 'production') {
    return {
      presets,
      plugins,
    }
  }
  plugins.push('@fullstory/babel-plugin-annotate-react')
  return {
    presets,
    plugins,
  }
}
