import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Scanned'>;
const Scanned = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Scanner');
        }}
        style={styles.button}
      >
        <Text>Go to Scanner</Text>
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

export default Scanned;
