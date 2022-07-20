import React from 'react';
import {View, FlatList, TextInput} from 'react-native';
import styles from '../styles/TodoStyles';
import Task from '../components/Task';
import Button from '../components/Button';

const renderItem = ({item}) => {
  return (
    <View style={styles.ListItem}>
      <Task
        id={item.id}
        title={item.title}
        backgroundColor={item.backgroundColor}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          backgroundColor={item.deleteColor}
          icon={item.icon}
          iconName={item.iconDelete}
        />
        <Button
          backgroundColor={item.doneColor}
          icon={item.icon}
          iconName={item.iconDone}
        />
      </View>
    </View>
  );
};

const TodoList = () => {

  const listData = [
    {
      id: 1,
      title: 'Task 1',
      state: 'active',
      icon: true,
      iconDelete: 'delete',
      iconDone: 'done',
      deleteColor: 'red',
      doneColor: 'green',
      backgroundColor: 'white',
    },
    {
      id: 2,
      title: 'Task 2',
      state: 'active',
      icon: true,
      iconDelete: 'delete',
      iconDone: 'done',
      deleteColor: 'red',
      doneColor: 'green',
      backgroundColor: 'white',
    },
    {
      id: 2,
      title: 'Task 2',
      state: 'active',
      icon: true,
      iconDelete: 'delete',
      iconDone: 'done',
      deleteColor: 'red',
      doneColor: 'green',
      backgroundColor: 'blue',
    },
    {
      id: 2,
      title: 'Task 2',
      state: 'active',
      icon: true,
      iconDelete: 'delete',
      iconDone: 'done',
      deleteColor: 'red',
      doneColor: 'green',
      backgroundColor: 'blue',
    },
    {
      id: 2,
      title: 'Task 2',
      state: 'active',
      icon: true,
      iconDelete: 'delete',
      iconDone: 'done',
      deleteColor: 'red',
      doneColor: 'green',
    },
  ];

  return (
    <View style={styles.ListContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput placeholder="Add Task" />
        <Button title="Add" />
      </View>
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  );
};

export default TodoList;
