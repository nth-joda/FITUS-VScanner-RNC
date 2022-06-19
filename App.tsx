/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginScreen from './app/screens/LoginScreen';
import MainScreen from './app/screens/MainScreen';
import TakePhotoScreen from './app/screens/TakePhotoScreen';
import PreviewScreen from './app/screens/PreviewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextDetected from './app/screens/TextDetected';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Camera" component={TakePhotoScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="TextDetection" component={TextDetected} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
