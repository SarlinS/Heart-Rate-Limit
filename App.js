import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  function calculate() {
    if (age !== '') {
      const lowerLimit = Math.round((220 - age) * 0.65);
      const upperLimit = Math.round((220 - age) * 0.85);
      setLimits(lowerLimit + " - " + upperLimit);
    } else {
      setLimits('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
        onBlur={calculate}
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
   marginTop:50,
   marginLeft:10,
  },
  field: {
    marginBottom:10,
  }
});
