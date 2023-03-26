import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
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
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue, child, remove} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Harvest');

const DelUpMyHarvest = ({route}) => {
  const navigation = useNavigation();
  const harvest = route.params;

  const onUpdatePressed = (id) => {
    navigation.navigate('UpHar', {harId: id});
  };

  const onDeletePressed = (id) => {
    console.log('Delete id ===> ', id);
    const nodeRef = ref(db, `Harvest/${id}`);
    remove(nodeRef)
    .then(() => {
      console.log('Data removed successfully');
      navigation.navigate("MyHarvest");
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
        <Text style={styles.text}>My Harvest</Text>
      </View>

      <ScrollView
            contentContainerStyle={{
              paddingBottom: 150
            }}
            style={styles.new3}
          >
          
      <View style={styles.column}>
        <Pressable style={styles.container}>
        <View>
        <Text style={styles.txt}>Crop Name </Text>
            <Text style={styles.txt}>Date </Text>
            <Text style={styles.txt}>Weight </Text>
            <Text style={styles.txt}>Description </Text>
</View>
<View>
<Text style={styles.txtnew}>: {harvest.cropName}</Text>
<Text style={styles.txtnew}>: {harvest.date}</Text>
            <Text style={styles.txtnew}>: {harvest.weight}</Text>
            <Text style={styles.txtnew}>: {harvest.description}</Text>

</View>
          <TouchableOpacity style={styles.btncontainer} onPress={() => onDeletePressed(harvest.id)}>
            <Image source={del}   style={styles.image}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btncontainer2} onPress={() => onUpdatePressed(harvest.id)} >
            <Image source={ed}  style={styles.image2}></Image>
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
  newnew:{
    top:-350

  },
  new3:{
    top:-320,
    height:550

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
    top: 200,
    left: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  txtnew:{
    left:140,
    top:-63,
    color: 'black',
    fontWeight: 'bold',

  },
  btncontainer2: {
    height: 60,
    width: 120,
    top: 140,
    left: 150,
    backgroundColor: 'green',
    borderRadius: 20,
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
    top:12
  },
  image2: {
    alignSelf: 'center',
    top:10
  },
  txt: {
    alignSelf:'flex-start',
    color: 'black',
    top: 15,
    left:20,
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
    top: -55,
    fontWeight: 'bold',
   
  },
});

export default DelUpMyHarvest;
