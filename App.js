import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input)); // Simple calculation logic
      setInput('');
    } catch (error) {
      setOutput('Error');
      setInput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.output}>{output}</Text>
      </View>

      <View style={styles.buttonRow}>
        {['7', '8', '9', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['4', '5', '6', '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['1', '2', '3', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['0', '.', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, item === '=' && styles.equalsButton]}
            onPress={item === '=' ? handleCalculate : () => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Vijay</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  input: {
    fontSize: 40,
    color: 'black',
  },
  output: {
    fontSize: 30,
    color: 'gray',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 20,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;