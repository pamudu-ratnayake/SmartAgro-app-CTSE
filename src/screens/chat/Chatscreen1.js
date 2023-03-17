import React, {useEffect, useState} from "react";
import { View,Text, StyleSheet, TouchableOpacity, ScrollView,Image} from "react-native";
import CustomHeader1 from "../../components/CustomHeader1";
import farm from '../../../assets/images/farm.png';
import crops from '../../../assets/images/crops.png';
import controllers from '../../../assets/images/controllers.png';
import yields from '../../../assets/images/yield.png';
import sub from '../../../assets/images/sub.png';
import shop from '../../../assets/images/shop.png';
import { useNavigation } from "@react-navigation/native";
import mzg from '../../../assets/images/mzg.png';
import men from '../../../assets/images/men.png';
import Conversations from "../Conversations/Conversations";
import SearchInput from "../common/SearchInput";
import Icon from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../theme';
import {fabStyles} from '../styles';



const Chatscreen1=() =>{
    const navigation =useNavigation();
    const onbtnPressed=() =>{
        navigation.navigate('ChattingScreen');
    }
    {/** const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const onMzgPressed=() =>{
        navigation.navigate('ChattingScreen');
    }

    useEffect(() => {
        fetchData("https://randomuser.me/api/?results=20");

    }, []);
  
    const fetchData = async (url) => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(json.results);
        }catch(error){
            console.error(error);
        }
    };*/}
    return(
        <View>
            <CustomHeader1></CustomHeader1>
            <ScrollView>
               {/* <Text style={styles.text}>Network</Text>
                {
                    filteredData.map((item, index) => {
                        return(
                            <View style={styles.column}>
                            <View style={styles.row}>
                            <View key = {index} style={styles.itemContainer}>
                                <Image source={{uri:item.picture.large}}
                                style={styles.image}/>
                                <View>
                                    <Text style={styles.textName}> {item.name.first} {item.name.last}</Text>
                                    <Text style={styles.textEmail}>{item.login.username}</Text>
                                </View>
                                
                            
                                
                            </View>
                            
                               <View>
                               <TouchableOpacity  style={styles.itemContainer2} onPress={onMzgPressed}>
                                <Image source={mzg} style={styles.image2}/>
                                </TouchableOpacity>
                                </View> 
                                <View>
                                <TouchableOpacity style={styles.itemContainer3} >
                                <Image source={men} style={styles.image3}/>
                                </TouchableOpacity>
                                </View> 
                           </View>
                           </View>
                        )
                    })
                }*/}
                <View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
			<Conversations>
				<SearchInput />
			</Conversations>
			<TouchableOpacity onPress={onbtnPressed} style={fabStyles.style}>
				<Icon name="chat" size={30} color={theme.colors.primary} />
			</TouchableOpacity>
		</View>
            </ScrollView>
          
    </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold",
        paddingBottom: 10
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    container:{
        width:110,
        height:110,
        borderRadius:20,
        borderColor:"#73C971",
        borderWidth:2,
        left:55,
        top:70,
        marginHorizontal:20,

    },

    container2:{
        width:110,
        height:110,
        borderRadius:20,
        borderColor:"#73C971",
        borderWidth:2,
        left:55,
        top:200,
        marginHorizontal:20,
    },
    row:{
        
        flex: 1,
        flexDirection: "row",

    },
    edcontainer:{
        width:10,
        height:10,
        left: 340,
       
    },

    container3:{
        width:110,
        height:110,
        borderRadius:20,
        borderColor:"#73C971",
        borderWidth:2,
        left:55,
        top:330,
        marginHorizontal:20,
    },

    row:{
        
        flex: 1,
        flexDirection: "row",

    },

    image:{
        width:40,
        height:40,
        borderRadius: 100
    },
    image2:{
        resizeMode:"contain",
        width:20,
        height:40,
        position:"relative",
        top:20,
        left: 150
    },
    image3:{
        resizeMode:"contain",
        width:20,
        height:40,
        position:"relative",
        top:20,
        left: 150
    },
    image3:{

    },
    txt:{
        alignSelf:"center",
        color:"black",
        top:25,
        fontWeight:"bold",
    },

    txt2:{
        alignSelf:"center",
        color:"black",
        top:25,
        fontWeight:"bold",
        top:50
    },

    txt3:{
        alignSelf:"center",
        color:"black",
        top:25,
        fontWeight:"bold",
        top:35
    },
    itemContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        height:null,
        width:170
    },
    itemContainer2:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        height:20,
        width:160
    },
    itemContainer3:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        padding: 20,
        height:20,
        width:160
    },
    image: {
        alignItems:'stretch',
        width:50,
        height: 50,
        borderRadius: 25,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600",
    },
    edcontainerm:{
        top:50,
        height:30,
        width: 30

    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "grey",
    },

    
    
   
})




export default Chatscreen1