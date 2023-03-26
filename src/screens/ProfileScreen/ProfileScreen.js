
import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { FlatList } from "react-native-gesture-handler";


export default class ProfileScreen extends React.Component{
    
  

    onEditProfilePressed = () => {
        this.props.navigation.navigate('EditProfile');
      };

    render(){
        return(
            <View>
                <CustomHeader></CustomHeader>
                <Text style={styles.text}>Profile</Text>


 <ScrollView
            contentContainerStyle={{
              paddingBottom: 150
            }}
            style={styles.new3}
          >
                
                <View>
                    <View>
                    <View style={styles.container2}>
                    <View style={styles.containernew}>
                    <View style={{margin:0}}>
                    <View style={{alignItems: 'center'}}>
        
        <Text style={styles.txt}>My registered phone number: </Text>
        <View>
        <Text style={styles.txt1}>UserID</Text>
        <Text style={styles.txt2}>FullName</Text>
        <Text style={styles.txt3}>Username</Text>
        <Text style={styles.txt5}>Password</Text>
        <Text style={styles.txt6}>Telephone</Text>
        <Text style={styles.txt7}>Email</Text>
        <Text style={styles.txt8}>Address</Text>
        

        </View>
<View style={styles.column}>




        <View style={styles.cont}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont1}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont2}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont3}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont4}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont5}>
        <Text style={styles.txt}></Text>
        </View>

        <View style={styles.cont6}>
        <Text style={styles.txt}></Text>
        </View>

        <TouchableOpacity style={styles.cont7} onPress={this.onEditProfilePressed}>
        <Text style={styles.txt}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cont8} 
        //</View>onPress={this.onBackPressed}
        >
        <Text style={styles.txt}>BACK</Text>
        </TouchableOpacity>

        
        

        
        </View>


                    </View>


                    </View>

                    </View>
                    </View>
                        
                    </View>
                    
                  
                    

                </View>
                </ScrollView>

               

                

            </View>

        );
    }

}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:"black",
        top:-320,
        left:30,
        fontWeight:"bold"
        
    },
    txt1:{
        left:-160,
       top:80,
       color:"black",
        fontWeight:"bold",
  

    },
    txt2:{
        left:-160,
       top:120,
       color:"black",
        fontWeight:"bold",
   

    },
    txt3:{
        left:-160,
       top:160,
       color:"black",
        fontWeight:"bold",

    },
    new3:{
        top:-320,
        height:550
    
      },
    
    txt5:{
        left:-160,
       top:200,
       color:"black",
        fontWeight:"bold",

    },
    txt6:{
        left:-160,
       top:240,
       color:"black",
        fontWeight:"bold",

    },
    txt7:{
        left:-160,
       top:280,
       color:"black",
        fontWeight:"bold",

    },
    txt8:{
        left:-160,
       top:320,
       color:"black",
        fontWeight:"bold",

    },
    cont:{
        height:50,
        width:250,
        top:50,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },

    cont1:{
        height:50,
        width:250,
        top:60,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont2:{
        height:50,
        width:250,
        top:70,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont3:{
        height:50,
        width:250,
        top:80,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont4:{
        height:50,
        width:250,
        top:90,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont5:{
        height:50,
        width:250,
        top:100,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont6:{
        height:50,
        width:250,
        top:110,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont7:{
        height:50,
        width:250,
        top:150,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#FFA903"


    },
    cont8:{
        height:50,
        width:250,
        top:170,
        borderRadius:50,
        borderColor:"#FFA903",
        borderWidth:3,
        backgroundColor:"#FFA903"

    },
    column:{
        //padding:20
        flex: 1,
        top:-120,
        flexDirection: "column",
    },
    
   
    container:{
        width:140,
        height:140,
        borderRadius:20,
        
        borderColor:"#73C971",
        borderWidth:2,
        left:50,
        top:100,
        marginHorizontal:10,
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
        top:25,
        color:"black",
        fontWeight:"bold",
        
        

    },
    name:{
        width:150,
        alignSelf:'center',
        top:60,
    },

    container:{
        backgroundColor:'#E4FFCA',
        width:'70%',
        borderRadius:20,
        borderColor:'#FFA903',
        borderWidth:3,
        position:"relative",
        top:50,
        paddingHorizontal:50,
        alignSelf:'center',
        marginVertical:3,
        fontStyle:'bold',
        opacity:0.7,
        height:50
    },

    input:{

    },
    btn:{
      position: 'absolute',
      borderRadius:20,
      width:'70%',
      bottom:0,
      left:0,
      bottom:10,
      top: 0
    },
    btn2:{
      position: 'absolute',
      borderRadius:20,
      width:'70%',
      bottom:0,
      left:0,
      bottom:10,
      top: 0,
      padding:10,
      paddingTop:20
    },
    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",


    },
    
    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:70,

    },
    container2:{
      padding:10,
      top:50,
      height:1000
    },
    containernew:{
        padding:0,
      top:0
    },
    edcontainer:{
        color:'#ffffff',
        width:10,
        height:10,
        borderRadius:50
    },
    imageed:{
        position:"relative",
        alignSelf:"center",
        width:30,
        height:30,
        left:50,
        borderRadius: 100
    },
    imageed2:{
        position:"relative",
        alignSelf:"center",
        width:30,
        height:30,
        left:3,
        top:5,
        borderRadius: 100
    },
    edcontainerm:{
        color:'#ffffff',
        borderRadius:50,
        height:30,
        width: 30,
        top:60,
        left:300


    },
    row:{
        
        flex: 1,
        flexDirection: "row",

    },
    edcontainer3:{
        backgroundColor:'#BB8888',
        width:40,
        height:40,
        borderRadius:50,
        position:"relative",
        left:250
    }
})




