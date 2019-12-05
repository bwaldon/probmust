var cmd = require('node-cmd');

module.exports = {

  node: cmd,

  run: function(command) {
    return cmd.run(command);
  },

  get: function(command,callback) {
    return cmd.get(command,callback);
  },

};