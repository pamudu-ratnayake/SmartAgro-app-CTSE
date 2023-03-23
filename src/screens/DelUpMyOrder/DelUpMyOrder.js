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
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import del from '../../../assets/images/del.png';
import ed from '../../../assets/images/ed2.png';
import CardView from 'react-native-cardview';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, onValue, child, remove} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Orders');

const DelUpMyOrder = ({route}) => {
  const navigation = useNavigation();
  const order = route.params;

  const onUpdatePressed = id => {
    navigation.navigate('UpOrders', {orderId: id});
  };

  const onDeletePressed = (id) => {
    const nodeRef = ref(db, `Orders/${id}`);
    remove(nodeRef)
    .then(() => {
      console.log('Data removed successfully');
      navigation.navigate("MyOrder");
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
        <Text style={styles.text}>My Orders</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        style={styles.new3}>
        <View style={styles.column}>
          <Pressable style={styles.container}>
            <Text style={styles.txt}>Fertilizer Type: {order.fertilizerType}</Text>
            <Text style={styles.txt}>Order Amount: {order.orderAmount}</Text>
            <Text style={styles.txt}>Description: {order.description}</Text>

            <TouchableOpacity style={styles.btncontainer} onPress={() => onDeletePressed(order.id)}>
              {/* <Image source={del} style={styles.image}></Image> */}
            <Image source={del}  style={styles.image}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btncontainer2} onPress={() => onUpdatePressed(order.id)}>
              {/* <Image source={ed} style={styles.image2}></Image> */}
            <Image source={ed}   style={styles.image2}></Image>
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
    top: 300,
    left: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  btncontainer2: {
    height: 60,
    width: 120,
    top: 240,
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

export default DelUpMyOrder;
