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
import {firebase, auth} from '../../../firebase.config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const SignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const signUp = () => {
    if (password === conPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          navigation.navigate('SignIn');
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });
    } else {
      Alert.alert('Error', 'Passwords do not match.');
    }
  };

  return (
    <View>
      <Image source={name} style={[styles.name]} resizeMode="contain" />

      <View style={styles.container}>
        <TextInput 
          placeholder="Email Address"
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

      <View style={styles.container}>
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setConPassword(text)}
        />
      </View>

      <View style={{top: 20}}>
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
    top: 180,
    fontWeight: 'bold',
  },
  link2: {
    color: '#42CC3F',
    fontWeight: 'bold',
    top: 160,
    alignSelf: 'flex-end',
    paddingRight: 70,
  },
});

export default SignUpScreen;
