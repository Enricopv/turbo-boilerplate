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
import {Text, View, StyleSheet} from 'react-native';
import StatusBar from '../../components/StatusBar';

function DetailsScreen() {
  return (
    <View style={DetailsScreenStyles.style}>
      <StatusBar />
      <Text>Details Screen</Text>
    </View>
  );
}

const DetailsScreenStyles = StyleSheet.create({
  style: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DetailsScreen;
