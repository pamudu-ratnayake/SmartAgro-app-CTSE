import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Pressable,
  ImageBackground,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
//import RNFetchBlob from 'rn-fetch-blob';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1,
};

export default class AddCropsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crop_name: '',
      //image:'https://img.icons8.com/fluency/48/000000/add-image.png',
      imageSource: null,
    };
  }

  

  test = () => {
    alert('Record inserted');
    this.props.navigation.navigate('Dash');
  };

  

  InsertRecord = async () => {
    var crop_name = this.state.crop_name;
    var imageSource = this.state.imageSource;

    if (crop_name.length == 0) {
      alert('Required Field is Missing');
    } else {
      try {
        const formData = new FormData();
        // formData.append('image', file, 'test.jpg');
        formData.append('image', {
          uri: imageSource.path,
          type: 'image/jpeg',
          name: 'test.jpg',
        });

        var InsertAPIURL = 'http://222.165.186.100:80/mobile_services/imageUpload';

        var headers = {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        };

        // var Data = {
        //   crop_name: crop_name,
        //   formData,
        // };

        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        };

        const res = await axios.post(InsertAPIURL, formData, config);

        var Data = {
          crop_name: crop_name,
          crop_image: `http://222.165.186.100:80/mobile_services/imageUpload/uploads/${res?.data?.data}`,
        };

        console.log(Data);

        const config1 = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };

        const res2 = await axios.post(
          'http://222.165.186.100:80/mobile_services/api/imageUpload.php',
          Data,
          config1,
        );

        console.log(res2);
               this.props.navigation.navigate('NewCrops');
      } catch (err) {
        alert('Error Occured' + err);
      }
    }
  };

  

  onImagePress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(imageSource => {
      console.log(imageSource);
      //let source = {uri: imageSource.path};
      this.setState({
        imageSource: imageSource,
      });
    });
  };

  // onImagePress = () => {

  //       this.setState({
  //         imageSource: source,
  //       });
  //     }
  //   });
  // };

  render() {
    return (
      <View>
        <CustomHeader></CustomHeader>
        <View>
          <Text style={styles.text}>Add Crops</Text>
        </View>
        <Text style={styles.text1}>Crops</Text>
        <View style={styles.container}>
          <TextInput
            placeholder=""
            style={styles.input}
            onChangeText={crop_name => this.setState({crop_name})}
          />
        </View>

        <Text style={styles.text1}>Add Crop Image</Text>
        <Pressable onPress={this.onImagePress} style={styles.container2}>
          <ImageBackground
            source={
              this.state.imageSource != null
                ? this.state.imageSource.path
                : require('../../../assets/images/AddPicture.png')
            }
            style={styles.image}></ImageBackground>
        </Pressable>

        <View style={{bottom: 50}}>
          <CustomButton onPress={this.InsertRecord} text="Save"></CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    top: 20,
    left: 30,
    fontWeight: 'bold',
  },

  text1: {
    color: 'black',
    top: 70,
    paddingLeft: 50,
    fontSize: 15,
  },
  container: {
    backgroundColor: 'ivory',
    width: '65%',
    borderRadius: 40,
    borderColor: '#83C882',
    borderWidth: 2,
    top: 70,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },

  container2: {
    width: 140,
    height: 100,
    borderRadius: 20,
    borderColor: '#73C971',
    borderWidth: 2,
    top: 100,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  image: {
    alignSelf: 'center',
    top: 5,
    left: 2,
    width: 80,
    height: 80,
  },
});
