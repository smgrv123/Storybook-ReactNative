import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import buttonStyles from '../styles/ButtonStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utils/ResponsiveSize';

const Button = ({
  backgroundColor = 'blue',
  color = 'black',
  title,
  icon = false,
  iconName,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        buttonStyles.button,
        {backgroundColor: backgroundColor},
        !icon ? {paddingHorizontal: wp(3), paddingVertical: hp(1)} : null,
      ]}
      onPress={onPress}>
      {icon ? (
        <Icon name={iconName} size={30} color={color} />
      ) : (
        <Text style={[buttonStyles.buttonText, {color: color}]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;
