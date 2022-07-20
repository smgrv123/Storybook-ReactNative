import * as React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import styles from '../styles/globalStyles';

export default function Task({id, title, backgroundColor: status = 'white'}) {
  return (
    <SafeAreaView style={[styles.ListItem, {backgroundColor: status}]}>
      <Text style={styles.taskText}>{title}</Text>
    </SafeAreaView>
  );
}
