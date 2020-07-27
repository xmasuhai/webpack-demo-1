module.exports = {
  ident: 'postcss',
  parser: 'postcss',
  plugins:  [
    require('autoprefixer')({
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
}

/*
* Replace Autoprefixer browsers option to Browserslist config.
*  Use browserslist key in package.json or .browserslistrc file.
*
*  Using browsers option can cause errors. Browserslist config
*  can be used for Babel, Autoprefixer, postcss-normalize and other tools.
*
*  If you really need to use option, rename it to overrideBrowserslist.
*
*  Learn more at:
*  https://github.com/browserslist/browserslist#readme
*  https://twitter.com/browserslist
*
*/