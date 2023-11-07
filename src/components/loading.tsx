import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Loading'>;

const LoadingScreen = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 20, marginTop: -50 }}>
        Hello
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img2: {
    position: 'absolute',
    top: 0,
    height: 900,
  },
  appby: {
    position: 'absolute',
    top: 220,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  appby1: {
    position: 'absolute',
    top: 320,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  appby2: {
    position: 'absolute',
    top: 350,
    backgroundColor: 'white',
  },
});

export default LoadingScreen;
