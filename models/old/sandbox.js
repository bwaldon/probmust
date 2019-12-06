const exec = require('child_process').exec

exec("pwd", function(err, stdout, stderr) { return console.log(stdout) })