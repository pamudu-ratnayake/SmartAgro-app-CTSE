import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Pressable,
  Alert,
} from 'react-native';
import name from '../../../assets/images/fff.png';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
//import {firebase} from '../../../firebase.config';
//import 'firebase/auth';
import {firebase} from '../../../firebase.config';
import {getDatabase, ref, push} from 'firebase/database';

const db = getDatabase(firebase);
const usersRef = ref(db, 'Users');

const SignUpScreen = () => {

  const navigation =useNavigation();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
 // const [description, setDescription] = useState('');

  const SignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in successfully
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View>
      <Image source={name} style={[styles.name]} resizeMode="contain" />

      <View style={styles.container}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={text => {
            setemail(text);
          }}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={text => {
            setpassword(text);
          }}
        />
      </View>

      <View style={{bottom: 10}}>
        <CustomButton text="SIGN UP" onPress={signUp} />
      </View>

      <Text style={styles.text1}>Already have an account?</Text>
      <Pressable onPress={SignInPressed}>
        <Text style={styles.link2}>SIGN IN</Text>
      </Pressable>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    width: 150,
    alignSelf: 'center',
    top: 80,
  },
  container: {
    backgroundColor: 'ivory',
    width: '80%',
    borderRadius: 40,
    borderColor: '#83C882',
    borderWidth: 2,
    top: 120,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },
  input: {},
  text1: {
    alignSelf: 'center',
    top: 140,
    fontWeight: 'bold',
  },
  link2: {
    color: '#42CC3F',
    fontWeight: 'bold',
    top: 120,
    alignSelf: 'flex-end',
    paddingRight: 70,
  },
});

export default SignUpScreen;
