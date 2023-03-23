import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import image1 from '../../../assets/images/bb.png';
import name from '../../../assets/images/fff.png';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {firebase, auth} from '../../../firebase.config';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignInScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignupPressed = () => {
    navigation.navigate('SignUp');
  };

  const SignInPressed = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('user is ==>', user);
        navigation.navigate('App');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', error.message);
      });

    // navigation.navigate('App');
  };

  return (
    <View>
      <Image source={image1} style={[styles.image]} resizeMode="contain" />
      <Image source={name} style={[styles.name]} resizeMode="contain" />
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <CustomButton onPress={SignInPressed} text="LOGIN"></CustomButton>
      <Text style={styles.text1}>Don't have an account?</Text>

      <Pressable>
        <Text style={styles.link2} onPress={SignupPressed}>
          SIGN UP
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  image: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    alignSelf: 'center',
    top: 100,
  },

  name: {
    width: '60%',
    alignSelf: 'center',
    maxWidth: 100,
    maxHeight: 150,
    top: 100,
  },

  container: {
    backgroundColor: 'ivory',
    width: '80%',
    borderRadius: 40,
    borderColor: '#FFA903',
    borderWidth: 2,
    top: 140,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },
  input: {
    paddingLeft: 30,
  },

  link1: {
    top: 130,
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontWeight: 'bold',
  },

  link2: {
    color: '#FFA903',
    fontWeight: 'bold',
    top: 130,
    alignSelf: 'flex-end',
    paddingRight: 75,
  },

  text1: {
    alignSelf: 'center',
    top: 150,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
