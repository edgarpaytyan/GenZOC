<!-- markdownlint-disable MD030 MD033 -->

# Development

This document describes the process for running this application on your local computer.

## Getting started

This app is powered by Node.js! :sparkles: :turtle: :rocket: :sparkles:

It runs on macOS, Windows, and Linux environments.

You'll need Node.js version 14 to run the app. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org). If you're using [`nodenv`](https://github.com/nodenv/nodenv), read the [`nodenv` docs](#nodenv) for instructions on switching Node.js versions.

Once you've installed Node.js (which includes the popular `npm` package manager), you'll have to install yarn, you can follow the [instruction on yarnpkg.com](https://yarnpkg.com/). When you'll have all things ready, open Terminal and run the following:

```sh
git clone https://github.com/cokaps016/GenZOC.git
cd GenZOC
yarn
yarn start
```

You should now have a running electron app opened! It will automatically restart as you make changes to app content.

When you're ready to stop your local server, type <kbd>CTRL</kbd><kbd>c</kbd> in your terminal window.

Note that `yarn` is step that should typically only need to be run once each time you pull the latest for a branch.

-   `yarn` does a clean install of dependencies, without updating the `yarn.lock` file

### Using GitHub Codespaces

As an alternative, you can simply use [GitHub Codespaces](https://github.com/features/codespaces).

In a matter of minutes, you will be ready to edit, preview and test your changes directly from the comfort of your browser.

### Debugging with VS Code

This repo has configuration for debugging with VS Code's built-in Node Debugger.

1. After running the build steps, start the app by running `yarn debug`.
2. In VS Code, click on the Debugging icon in the Activity Bar to bring up the Debug view.
3. In the Debug View, select the **'Debug Electron Main'** configuration, then press F5 or click the green play button. You should see all of your running node processes.
4. Debugger has now been attached. Enjoy!
 <!-- 4. Select the node process that's started with the `--inspect` flag. -->

You can learn more about debugging using VS Code [here](https://code.visualstudio.com/docs/editor/debugging).

## App structure

This app is a Electron and Electron-Forge app, using webpack, tailwindcss and daisyui
