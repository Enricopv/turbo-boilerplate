## Note:
Shout out to this [gist](https://gist.github.com/sibelius/8ca62bab78ee9644ae5caffb9f1b1ef4) for making life easier. 

# Turborepo Boiler Plate

- Includes Next.js, Remix, Expo, and React Native projects

# How to use

- Clone: `git clone https://github.com/Enricopv/turbo-boilerplate.git {name}`
- Install: `yarn`
- Run: `yarn dev`

For the react native project, you will need to go to apps/rnative/package.json and look at the scripts section. For the first run of `yarn dev` you will need to make sure 'dev' is running the platform you intend to run. For example `dev: react-native run-ios` or `dev: react-native run-android`.

Once you have run this at least once, you can set it back to `dev: react-native start`. This command will simply start the metro server, so you can just open the app in your simulator/device and it should auto connect. If you make a pretty big change (adding a library that uses native components), you will need to do the run-ios / run-android thing again to build anew.
