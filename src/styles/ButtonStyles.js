import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utils/ResponsiveSize';

const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: hp(10),
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
});

export default buttonStyles;

