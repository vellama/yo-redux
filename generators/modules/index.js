'use strict';

var generators = require('yeoman-generator');

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('moduleName', {
      type: String,
      required: true
    });
  }, // <= contructor

  // ----------------------------------------------------------------------

  configuring: function () {
    this._copy_files();
  },

  // ----------------------------------------------------------------------

  install: function () {
    this._install_npm();
  }, // <= install

  // ----------------------------------------------------------------------

  end: function () {
    this.log(`${this.moduleName} generated`);
  }, // <= end

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  _copy_files: function () {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationPath(`${this.moduleName}/`)
    )
  }, // <= _copy_files

  // ----------------------------------------------------------------------

  _install_npm: function () {
    this.npmInstall([
      'dumeez-redux-base',
      'immutable'
    ], {
      'saveDev': true
    })
  } // <= _install_npm

});