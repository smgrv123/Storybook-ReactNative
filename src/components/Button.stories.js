import * as React from 'react';
import {View} from 'react-native';
import styles from '../styles/globalStyles';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Button from './Button';

export const task1 = {
  id: 0,
  backgroundColor: 'green',
  color: 'white',
  icon: true,
  iconName: 'done',
};

export const task3 = {
  id: 0,
  backgroundColor: 'red',
  color: 'white',
  icon: true,
  iconName: 'delete',
};

export const task2 = {
  id: 1,
  title: 'Add Todo',
  backgroundColor: 'blue',
  color: 'black',
};

export const actions = {
  onPress: action('button-pressed'),
};

storiesOf('Button', module)
  .addDecorator(story => <View style={styles.TaskBox}>{story()}</View>)
  .add('completeTodo', () => (
    <Button
      backgroundColor={task1.backgroundColor}
      icon={task1.icon}
      iconName={task1.iconName}
      {...actions}
    />
  ))
  .add('addTodo', () => (
    <Button
      backgroundColor={task2.backgroundColor}
      title={task2.title}
      color={task2.color}
      {...actions}
    />
  ))
  .add('deleteTodo', () => (
    <Button
      backgroundColor={task3.backgroundColor}
      icon={task3.icon}
      iconName={task3.iconName}
      {...actions}
    />
  ));
