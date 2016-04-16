'use strict';

var generators = require('yeoman-generator');

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('name');
  },

  // ----------------------------------------------------------------------

  prompting: function () {
     this._promptName();
  },

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  _confirmName: function () {
    var done = this.async();

    this.prompt({
      type: 'confirm',
      name: 'reducerNameConfirmed',
      message: `confirm reducer name ${this.options.name}`,
      default: true,
      store: true
    }, function (answers) {
      this.log(answers.reducerNameConfirmed)
    }.bind(this));
  },

  // ----------------------------------------------------------------------

  _promptName: function () {

    if (this.options.name) {
      this._confirmName();
    } else {

      var done = this.async();

      this.prompt({
        type: 'input',
        name: 'reducerName',
        message: 'reducer name',
        default: this.appname,
        store: true
      }, function (answers) {
        this.log(answers.reducerName);
        done();
      }.bind(this));

    }
  }

});