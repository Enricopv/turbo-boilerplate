## THANKS:
- Shout out to this [gist](https://gist.github.com/sibelius/8ca62bab78ee9644ae5caffb9f1b1ef4) for making life easier.
- Thanks to https://turborepo.org/ for being rad


## Notes
- The expo project runs on expo sdk 43 because sdk 44 has bugs with @react-navigation (more particulary react-native-screens I think). Once sdk 44 is more stable with @react-navigation, I will bump it.

- xpo is running react-native: 66.4, which is not the version that expo sdk 43 is supposed to run with (64.3). However I found that it v64.3 not work with v6 of `@react-navigation` otherwise.


# Turborepo Boiler Plate

- Includes Next.js, Remix, Expo, and React Native projects
  - apps
    - web: Next.js
    - docs: Next.js
    - blog: Remix
    - rnative: React Native
      - @react-navigation/native-stack example
    - xpo: Expo
      - @react-navigation/native-stack example
  - packages
    - ui: react lib
    - ui-native: react-native lib
  - wrappers
    - bp-request: sample js wrapper lib for axios

# How to use

### NOTE FOR REACT NATIVE:

1. In the scripts of `apps/rnative/package.json` you will want to make sure that `dev` is set to run either ios or android depending on your setup. By default it runs
ios.

```
apps/rnative/package.json

scripts": {
    "dev": "yarn ios", // yarn ios | yarn android | yarn start
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "clean": "rm -rf .turbo && rm -rf node_modules"
  },
```
### Run commands:
`yarn dev` runs all the projects in a development state as this project copies the kitchen-sink example from turbo. You will want to edit the `dev` command of a project's `package.json` to do something else or remote it entirely. You may want look at Turbo's docs under --scope for more control.

- Clone: `git clone https://github.com/Enricopv/turbo-boilerplate.git {name}`
- Install: `yarn`
- Run: `yarn dev` // to run all projects
- Run: `yarn dev --scope={name}` // to run a single project. Running this may not show your live updates from the ui packages if they are not also running too.



## Troubleshooting
<b>Long jest-haste-map Issue</b>
- If you are running into ths problem, try running `yarn clean:watchman`.

