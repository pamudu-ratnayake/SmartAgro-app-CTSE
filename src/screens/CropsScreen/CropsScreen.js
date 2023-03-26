//CropsScreen 

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
import harvest from '../../../assets/images/plus.png';
import brinjal from '../../../assets/images/eggplant.png';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

export default class CropsScreen extends React.Component {
  state = {
    data: [],
  };

  onAddCrop = () => {
    this.props.navigation.navigate('AddCrops');
  };

  Session = () => {
    this.props.navigation.navigate('Sensor');
  };

  fetchData = async () => {
    const response = await fetch('http://222.165.186.100:80/mobile_services/api/imageRet.php');
    const users = await response.json();
    this.setState({data: users});
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <View>
        <CustomHeader></CustomHeader>
        <Text style={styles.text}>Your Crops</Text>
          <View>
          <Pressable onPress={this.onAddCrop} style={styles.container}>
            <Image source={harvest} style={styles.Image}></Image>
            {/* <Text style={styles.txt}>Add Crops</Text> */}
          </Pressable>
          </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderColor: '#73C971',
    borderWidth: 2,
    left: 50,
    top: 40,
    marginHorizontal: 20,
  },

  container1: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderColor: '#73C971',
    borderWidth: 2,
    left: 50,
    //bottom: 20,
    top:50,
    marginHorizontal: 20,
    marginVertical: 10,
    
    
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

 
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    top: 10,
  },

  image: {
    alignSelf: 'center',
    top: 20,
    width: 80,
    height: 80,
  },

  txt: {
    alignSelf:'center',
    fontSize: 15,
    color: 'black',
    // left: 100,
    top: 20,
  },

  Container: {
    width: 350,
    height: 100,
    backgroundColor: '#E8E1E1',
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