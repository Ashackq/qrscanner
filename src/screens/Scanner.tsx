import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Scanner'>;

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Scanner</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Scanned');
        }}
      >
        <Text>Navigate to Scanned</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
  },
});

export default HomeScreen;
