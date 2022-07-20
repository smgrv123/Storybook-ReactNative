import * as React from 'react';
import {View} from 'react-native';
import styles from '../styles/globalStyles';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Task from './Task';
export const task = {
  id: '1',
  title: 'Test Task',
};

export const actions = {
  onPress: action('button-pressed'),
};

storiesOf('Task', module)
  .addDecorator(story => <View style={styles.TaskBox}>{story()}</View>)
  .add('default', () => (
    <Task
      id={1}
      title={task.title}
      backgroundColor={'white'}
      {...actions}
    />
  ))
  .add('completed', () => (
    <Task
    id={2}
    title={task.title}
    backgroundColor={'blue'}
      {...actions}
    />
  ));
