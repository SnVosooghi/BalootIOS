// Ignite CLI plugin for RadioButtons
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()


const add = async function (toolbox) {
  // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
  const { ignite } = toolbox

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  // Example of copying templates/RadioButtons to app/ignite-radio-buttons
  // if (!toolbox.filesystem.exists(`${APP_PATH}/app/ignite-radio-buttons`)) {
  //   toolbox.filesystem.copy(`${PLUGIN_PATH}/templates/ignite-radio-buttons`, `${APP_PATH}/app/ignite-radio-buttons`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/app/config/app-config.js`, {
  //   insert: `import '../ignite-radio-buttons/ignite-radio-buttons'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (toolbox) {
  // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
  const { ignite } = toolbox

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  // Example of removing app/RadioButtons folder
  // const removeignite-radio-buttons = await toolbox.prompt.confirm(
  //   'Do you want to remove app/ignite-radio-buttons?'
  // )
  // if (removeignite-radio-buttons) { toolbox.filesystem.remove(`${APP_PATH}/app/ignite-radio-buttons`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/app/config/app-config.js`, {
  //   delete: `import '../ignite-radio-buttons/ignite-radio-buttons'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

