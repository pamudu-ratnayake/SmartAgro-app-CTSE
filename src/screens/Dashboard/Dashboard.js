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
import farm from '../../../assets/images/har.png';
import crops from '../../../assets/images/fru.png';
import controllers from '../../../assets/images/shoo.png';
import yields from '../../../assets/images/com.png';
import sub from '../../../assets/images/sub.png';
import shop from '../../../assets/images/shop.png';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const onFarmPressed = () => {
    navigation.navigate('MyFarm');
  };

  const onHarvestPressed = () => {
    navigation.navigate('Harvest');
  };

  const onOrdersPressed = () => {
    navigation.navigate('Orders');
  };

  const onFertilizerPressed = () => {
    navigation.navigate('Firt');
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>Dashboard</Text>
      </View>
      <View style={styles.cont}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Pressable onPress={onFarmPressed} style={styles.container}>
              <Image source={crops} style={styles.image}></Image>
              <Text style={styles.txt}>Crops</Text>
            </Pressable>
            <Pressable onPress={onHarvestPressed} style={styles.container}>
              <Image source={farm} style={styles.image}></Image>
              <Text style={styles.txt}>Harvest</Text>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable onPress={onOrdersPressed} style={styles.container2}>
              <Image source={controllers} style={styles.image}></Image>
              <Text style={styles.txt}>Orders</Text>
            </Pressable>
            <Pressable onPress={onFertilizerPressed} style={styles.container2}>
              <Image source={yields} style={styles.image}></Image>
              <Text style={styles.txt}>Fertilizing Details</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    top: -350,
    left: 30,
    fontWeight: 'bold',
  },
  container: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 55,
    top: 70,
    marginHorizontal: 20,
  },
  cont: {
    top: -350,
  },

  container2: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 55,
    top: 200,
    marginHorizontal: 20,
  },

  container3: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 55,
    top: 330,
    marginHorizontal: 20,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    alignSelf: 'center',
    top: 20,
  },
  txt: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
    fontWeight: 'bold',
  },

  txt2: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
    fontWeight: 'bold',
    top: 50,
  },

  txt3: {
    alignSelf: 'center',
    color: 'black',
    top: 25,
    fontWeight: 'bold',
    top: 35,
  },
});

export default Dashboard;
