let childProcess = require('child_process');

function execShellCommand(command) {
    return new Promise((resolve) => {
        childProcess.exec(command, { encoding: 'utf8', maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            if (stdout) { console.log(stdout); }

            resolve(stdout ? stdout : stderr);
        });
    });
}
module.exports = {}, execShellCommand