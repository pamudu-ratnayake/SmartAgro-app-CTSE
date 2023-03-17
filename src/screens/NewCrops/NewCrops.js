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
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

export default class NewCrops extends React.Component {
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
    const response = await fetch('http://10.0.2.2:80/api/imageRet.php');
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
          <FlatList
            numColumns={2}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <Text style={styles.txt}>{item.crop_name}</Text>
                <Pressable onPress={this.Session} style={styles.container1}>
                  <Image
                    source={{uri: item.crop_picture}}
                    style={styles.image}></Image>
                </Pressable>
              </View>
            )}
          />
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
    top: 100,
    marginHorizontal: 10,
  },

  container1: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderColor: '#73C971',
    borderWidth: 2,
    left: 50,
    //bottom: 20,
    marginHorizontal: 10,
    marginTop:50
    //top: 20
    // alignSelf: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  column: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  txt: {
    alignSelf: 'center',
    color: 'black',
    top: 100,
    left: 80,
    fontWeight: 'bold',
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
    alignSelf: 'center',
    fontSize: 15,
    color: 'black',
    left: 50,
    top: 170,
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