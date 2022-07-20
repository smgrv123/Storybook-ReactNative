import React from 'react';
import {View, Text} from 'react-native';
import TodoList from './src/screens/TodoList';

const App = () => {
  return (
    <View style={{flex:1}} >
      <TodoList/>
    </View>
  );
};

export default App;
