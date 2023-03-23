import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import harvest from '../../../assets/images/ad.png';
import farm from '../../../assets/images/har.png';
import {useNavigation} from '@react-navigation/native';

const Harvest = () => {
  const navigation = useNavigation();

  const AddHarvestPressed = () => {
    navigation.navigate('AddHarvest');
  };
  const AddMyHarvestPressed = () => {
    navigation.navigate('MyHarvest');
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <Text style={styles.text}>Harvest</Text>
      <View style={styles.row}>
        <Pressable style={styles.container} onPress={AddHarvestPressed}>
          <Image source={harvest} style={styles.Image}></Image>
          <Text style={styles.txt}>Add Harvest</Text>
        </Pressable>
        <Pressable style={styles.container} onPress={AddMyHarvestPressed}>
          <Image source={farm} style={styles.Image}></Image>
          <Text style={styles.txt}>My Harvest</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 50,
    top: 40,
    marginHorizontal: 20,
  },

  container1: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 50,
    //bottom: 20,
    top: 50,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    top:-320
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    top: -310,
  },

  image: {
    alignSelf: 'center',
    top: 20,
    width: 80,
    height: 80,
  },

  txt: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'black',
    // left: 100,
    top: 20,
  },

  Container: {
    width: 350,
    height: 100,
    backgroundColor: '#FFA903',
    borderRadius: 10,
    //borderColor:"#73C971",
    //borderWidth:2,
    marginHorizontal: 10,
    top: 10,
    alignSelf: 'center',
    margin: 10,
  },

  Image: {
    alignSelf: 'center',
    top: 20,
    width: 60,
    height: 60,
  },
});

export default Harvest;
