/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import * as React from 'react';
 import DeafultReactNativeScreen from './src/screens/DefaultReactNativeScreen';
 import DetailsScreen from './src/screens/DetailsScreen';
 import {RootStackParamList} from './src/types/navigation-types';

 const Stack = createNativeStackNavigator<RootStackParamList>();

 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={DeafultReactNativeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

 export default App;
