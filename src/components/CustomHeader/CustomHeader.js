import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import logo from '../../../assets/images/logo3.png';
import {useNavigation} from '@react-navigation/native';
import ff from '../../../assets/images/ff.jpg';
import wing from '../../../assets/images/wing.png';

//this.props.navigation.dispatch(DrawerActions.closeDrawer());
//this.props.navigation.dispatch(DrawerActions.openDrawer());

const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.backgroundContainer}>
        <Image source={ff} style={styles.image} />
      </View>
      <View style={styles.overlay}>
        <Image source={logo} styles={styles.lg} />
      </View>
      <View>
        <Image source={wing} style={styles.image2} />
      </View>

      <TouchableOpacity style={styles.viewBack}>
        <Image
          source={require('../../../assets/images/bck.png')}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewTask}
        onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../../assets/images/menu.png')}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9,
  },

  image: {
    height: 100,
  },
  image2: {
    height: 350,
    top: 270,
    width: 550,
    opacity: 0.2,
  },

  overlay: {
    alignSelf: 'center',
  },
  lg: {
    alignSelf: 'center',
    //height:2
    //height:"20"
  },
  viewTask: {
    position: 'absolute',
    bottom: 40,
    right: 19,
    height: 60,
    opacity: 0.5,
    width: 60,
    top: 20,
    backgroundColor: '#070707',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2E66E7',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 999,
  },
  viewBack: {
    position: 'absolute',
    bottom: 40,
    right: 19,
    height: 60,
    opacity: 0.5,
    left: 20,
    width: 60,
    top: 20,
    backgroundColor: '#070707',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2E66E7',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 999,
  },
  overlay2: {
    //alignSelf:"absolute",
    position: 'absolute',
    paddingTop: 270,
    top: 150,
    bottom: 50,
    left: 0,
    right: 0,
    //opacity:0.9,
  },
});

export default CustomHeader;
