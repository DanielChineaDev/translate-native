/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';

const Tab = createBottomTabNavigator()

//const Stack = createNativeStackNavigator()

const Saved = () => {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text>Saved</Text>
    </View>
  )
}


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Home" 
        component={Home} 
        options={{
          headerShown:false,}}/>

        <Tab.Screen 
        name="Saved" 
        component={Saved} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;