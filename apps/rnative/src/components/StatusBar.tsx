/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {StatusBar as RNStatusBar, useColorScheme} from 'react-native';

const StatusBar = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RNStatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  );
};

export default StatusBar;
