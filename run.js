#!/usr/bin/env node


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


(async function() {


    //TODO: 
    let OS_BASE_ORG_USERNAME = process.env.OS_BASE_ORG_USERNAME || 'rmasud@sfi-omnistudio-starter.com';

    //Use the existing exported auth to establish connectivity
    await execShellCommand(`sfdx auth:sfdxurl:store -f authFile.json`);
    await execShellCommand(`sfdx config:set defaultusername=${OS_BASE_ORG_USERNAME}`);
    await execShellCommand(`sfdx alias:set os-kickstarter=${OS_BASE_ORG_USERNAME}`);

    console.log('Starting Scratch Org Create');
    let scratchOrgResult = await execShellCommand('sfdx force:org:create -f scratch_org_config.json --durationdays 30 -v os-kickstarter --json --wait 10');
    let scratchOrgUsername = JSON.parse(scratchOrgResult).result.username;
    console.log('Finished Scratch Org Create');

    console.log('Starting Omnistudio Package Install - 236.3');
    let packageResult = await execShellCommand(`sfdx force:package:install -p 04t4W000002kdlN -w 45 -r -u ${scratchOrgUsername} --json `);
    console.log('Finished Omnistudio Package Install - 236.3');

    console.log('Starting Omnistudio Post Install Required Remote Sites');
    let dearPackage1 = await execShellCommand(`./.tooling/${process.platform}/sf.demoengineering.semanticdx.shape.cli dear:package:run ./.dearpackages/sfi.de.omnistudio.default.remotesites.dear ${scratchOrgUsername }`);
    console.log('Finished Omnistudio Post Install Required Remote Sites');

    console.log('Starting Omnistudio Post Install OmniUiCard Designer Activate');
    let dearPackage2 = await execShellCommand(`./.tooling/${process.platform}/sf.demoengineering.semanticdx.shape.cli dear:package:run ./.dearpackages/sfi.de.omnistudio.omniuicard.designer.dear ${scratchOrgUsername }`);
    console.log('Finished Omnistudio Post Install OmniUiCard Designer Activate');

    process.exit();

})();