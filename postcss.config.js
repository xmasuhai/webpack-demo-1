module.exports = {
  ident: 'postcss',
  parser: 'postcss',
  plugins:  [
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
}