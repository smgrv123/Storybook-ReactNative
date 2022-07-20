import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utils/ResponsiveSize';

const styles = StyleSheet.create({
  ListItem: {
    height: 50,
    justifyContent:'center',
    width: wp('80%'),
    marginVertical: hp(1),
  },
  TaskBox: {
    backgroundColor: '#fff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText:{
    fontSize: 20,
    color:'#000',
  }
});

export default styles;
