const chalk = require('chalk');

const tgBanner =
  '                    .--::::--.                    \n' +
  '              ./oydmmmdhhhhdmmmdyo/.              \n' +
  '          `:sdmds+:.`        `.:+sdmds:`          \n' +
  '        .odmy/.                    ./ymdo.        \n' +
  '      .smmo.                          .omms.      \n' +
  '     /mmo`    .---                      `omm/     \n' +
  '    oNd-      |ddd                        -dNo    \n' +
  '   sNh`    |::hddd+:::   `/yhdddhhhhhh:    `hNs   \n' +
  '  +Nd.     |dddddddddd  -dNNdo/+hNNNhy      .dN+  \n' +
  ' `mN/      `--hddd/---  sNNN`   `dNNy        /Nm` \n' +
  ' /Nm          hddd-     /mNNo...+mNNo         mN/ \n' +
  ' oNh          hddd-     .dNNmmdmmdh/          hNo \n' +
  ' oNh          hddd-     hNNh.                 hNo \n' +
  ' /Nm          yddds---` smNmdhhhhhyo:`        mN/ \n' +
  ' `mN/         :hdddddd. +mNmysssshNNNh`      /Nm` \n' +
  '  +Nd.         .:++++: +NNNo     `mNNN-     .dN+  \n' +
  '   sNh`                /mNNmso++sdNNmo     `hNs   \n' +
  '    oNd-                .+syhddhhyo/.     -dNs    \n' +
  '     /mmo`                  `````       `omm/     \n' +
  '      .smmo.                          .omms.      \n' +
  '        .odmy/.                    ./ymdo.        \n' +
  '          `:sdmds+:.          .:+sdmds:`          \n' +
  '              ./oydmmmdhhhhdmmmdyo/.              \n' +
  '                    .--::::--.                    \n';

/**
 * Print tg Banner
 */
const banner = () => {
  console.info(chalk.blue(tgBanner));
};

/**
 * Print line
 */
const line = () =>
  console.info(
    chalk.green(
      '********************************************************'
    )
  );

/**
 * Print mapped path
 * @param {*} message
 * @param {*} epName
 * @param {*} epMethod
 */
const routemap = (message, epName, epMethod) => {
  console.info(
    message,
    'Path:',
    chalk.yellow(`[/${epName}]`),
    'Method:',
    chalk.yellow(`[${epMethod}]\n`)
  );
};

/**
 * Print starting server
 */
const startingServer = () => {
  console.info(chalk.yellow('Starting Server...\n'));
  line();
};

/**
 * Print server started
 * @param {*} port 
 */
const serverStarted = (port) => {
  line();
  console.info(
    ' Server started at',
    chalk.yellow(`http://localhost:${port}`)
  );
  line();
};

module.exports = {
  banner,
  line,
  routemap,
  serverStarted,
  startingServer,
};
