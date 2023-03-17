import React , {useEffect, useState} from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable, KeyboardAvoidingView} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import farm from '../../../assets/images/farm.png';
import crops from '../../../assets/images/crops.png';
import controllers from '../../../assets/images/controllers.png';
import yields from '../../../assets/images/yield.png';
import sub from '../../../assets/images/sub.png';
import shop from '../../../assets/images/shop.png';
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ChatHeader from "../../components/messages/ChatHeader";
import ChatInput from "../../components/ChatInput/ChatInput";
import MessagesList from "../../components/MessagesList/MessagesList";
import { SafeAreaView } from "react-native-safe-area-context";
const ChattingScreen=({navigation, route}) =>{

    const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

    return(
        <SafeAreaView>
        <View>
        
            <CustomHeader></CustomHeader>
       
          <ChatHeader
				onPress={() => {}}
				username={username}
				picture={picture}
				onlineStatus={'Online'}
			/>
    
			<MessagesList onSwipeToReply={swipeToReply} />
           
           
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username} />
        
                </View>                
                   
                                
                          

     
          </SafeAreaView>

    )
  
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
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
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
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
        alignSelf:"center",
        top:20,
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
    chatidentifier:{
        backgroundColor:'#FFFFFF',
        height:550,
       // left:100,
        top:20,
        width:350,
        alignSelf:'center',
        borderRadius:20,
    },itemContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        height:null,
        width:170
    },

    
    
   
})




export default ChattingScreen