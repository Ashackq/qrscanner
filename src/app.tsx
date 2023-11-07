import React from 'react';
//nav
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { StyleSheet } from 'react-native';
import { Scanned, Scanner } from './screens';

export type RootStackParamList = {
  Scanner: undefined;
  Scanned: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Group screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="Scanned" component={Scanned} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
