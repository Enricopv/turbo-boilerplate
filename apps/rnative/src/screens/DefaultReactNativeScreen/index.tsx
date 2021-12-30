/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as requestWrapper from 'bp-request';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button as UINButton} from 'ui-native';
import {RootStackParamList, ScreenList} from '../../types/navigation-types';
import {Section} from './components/Section';
import {styles} from './components/styles';

const useTestWrapper = () => {
  React.useEffect(() => {
    requestWrapper
      .get<{}, {data: {abilities: any}}>(
        'https://pokeapi.co/api/v2/pokemon/ditto',
      )
      .then(result => {
        console.log('result', result?.data?.abilities);
      });
  }, []);
};

const DeafultReactNativeScreen = (
  props: NativeStackScreenProps<RootStackParamList, 'Home'>,
) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigateTo = (screen: ScreenList) => () =>
    props.navigation.navigate(screen);

  useTestWrapper();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <UINButton title="Go To Details" onPress={navigateTo('Details')} />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeafultReactNativeScreen;
