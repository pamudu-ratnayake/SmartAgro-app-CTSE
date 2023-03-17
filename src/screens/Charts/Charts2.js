
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from "../../components/CustomHeader";

const Charts2 = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CustomHeader></CustomHeader>
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: 'http://10.0.2.2:80/api/index2.php'}} />
      </SafeAreaView>
      
    </>
  );
};

export default Charts2;
