import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs, Login, Book, User, Storage } from './src/components/aula09/utils';
import styles from './src/components/aula09/ToolBar/styles';

const Stack = createStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Book" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App

