// DelUpMyCrops

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import del from '../../../assets/images/del.png';
import ed from '../../../assets/images/ed2.png';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue, child, remove} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Crops');

const DelUpMyCrops = ({route}) => {
  const navigation = useNavigation();
  const crop = route.params;
  //   const [cropData, setCropData] = useState({});

  const onUpdatePressed = id => {
    navigation.navigate('UpCrop', {cropId: id});
  };

  const onDeletePressed = id => {
    console.log('Delete id ===> ', id);
    const nodeRef = ref(db, `Crops/${id}`);
    remove(nodeRef)
      .then(() => {
        console.log('Data removed successfully');
        navigation.navigate('MyCrops');
      })
      .catch(error => {
        console.error('Error removing data: ', error);
      });
  };

  //Flatlist should be implemented

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View>
        <Text style={styles.text}>My Crops</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        style={styles.new}>
        <View style={styles.column}>
          <Pressable style={styles.container}>
            <Text style={styles.txt}>{crop.cropName}</Text>
            <Text style={styles.txt}>{crop.cropDes}</Text>

            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => onDeletePressed(crop.id)}>
              <Image source={del} style={styles.image}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btncontainer2}
              onPress={() => onUpdatePressed(crop.id)}>
              <Image source={ed} style={styles.image2}></Image>
            </TouchableOpacity>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    top: -320,
    left: 30,
    fontWeight: 'bold',
  },
  container: {
    width: 310,
    height: 460,
    borderRadius: 20,
    borderColor: '#FFA903',
    borderWidth: 2,
    left: 15,
    top: 70,
    marginHorizontal: 20,
  },
  column: {
    // top:-320
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
  btncontainer: {
    height: 60,
    width: 120,
    top: 350,
    left: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  btncontainer2: {
    height: 60,
    width: 120,
    top: 290,
    left: 150,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  new: {
    top: -320,
    height: 550,
  },
  btntxt: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    top: 15,
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
    top: 12,
  },

  image2: {
    alignSelf: 'center',
    top: 10,
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

export default DelUpMyCrops;
