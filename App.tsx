import React from 'react';
import PizzaTranslator from './src/components/PizzaTranslator';
import ScrollExample from './src/components/ScrollExample';
import FlatListBasics from './src/components/ListView';
import { Text, View,StyleSheet, Button } from 'react-native';



const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  text:{
    fontSize: 42,
    color: '#2c3e50',
    padding: 10,
    fontWeight: 'bold',
  }
})
const App = () => {
  return (
    <View style={styleSheet.container}>
      <PizzaTranslator />
      <ScrollExample />
      <FlatListBasics />
    </View>
  );
};

export default App;
