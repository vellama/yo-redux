'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('appname', {
      type: String,
      required: true
    });
  },

  // ----------------------------------------------------------------------

  configuring: function () {
    // this._copy_babelrc();
    // this._copy_editorconfig();
    // this._copy_gitignore();
    // this._copy_nvmrc();
    // this._copy_src();
    this._copy_files();
  },

  // ----------------------------------------------------------------------

  install: function () {
    this._install_npm();
  },

  // ----------------------------------------------------------------------

  end: function () {
    this.log('happy coding !');
  },

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  _copy_babelrc: function () {
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
  },

  // ----------------------------------------------------------------------

  _copy_editorconfig: function () {
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
  },

  // ----------------------------------------------------------------------

  _copy_files: function () {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationRoot(),
      {
        globOptions: {
          dot: true
        }
      }
    )
  },

  // ----------------------------------------------------------------------

  _copy_gitignore: function () {
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
  },

  // ----------------------------------------------------------------------

  _copy_nvmrc: function () {
    this.fs.copyTpl(
      this.templatePath('.nvmrc'),
      this.destinationPath('.nvmrc')
    );
  },

  // ----------------------------------------------------------------------

  _copy_src: function () {
    this.fs.copyTpl(
      this.templatePath('src/**/*'),
      this.destinationPath('src')
    )
  },

  // ----------------------------------------------------------------------

  _install_npm: function () {
    this.npmInstall([
      'react',
      'redux',
      'react-dom',
      'react-redux',
      'react-router-redux'
    ], {
      'saveDev': true
    });
  }
});