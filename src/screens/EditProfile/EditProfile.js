import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import harvest from '../../assets/images/harvest.png';
import analysis from '../../assets/images/analysis.png';
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import CustomBtn2 from "../../components/CustomBtn2"
import { Button } from "react-native-elements/dist/buttons/Button";
//import CustonBtnProfile from "../../"
import CustonBtnProfile from "../../components/CustomBtnProfile/CustomBtnProfile";


export default class EditProfile extends React.Component{
    
    state = {
        data:[]
    }

    constructor(props) {
        super(props);
        this.state = {
            userID:'',
            fullName: '',
            username:'',
            password : '',
            tel:'',
            email : '',
            address:'',
         
         
          
          };
       }

       InsertRecord= async ()=>{
        var userID = this.state.userID;
        var fullName = this.state.fullName;
        var username = this.state.username;
        var password = this.state.password;
        var tel = this.state.tel;
        var email = this.state.email;
        var address = this.state.address;
       
       

        if((
            userID.length==0 ||
            fullName.length==0|| username.length==0|| password.length==0 ||tel.length==0 ||email.length==0 ||address.length==0 )){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://10.0.2.2:80/api/EditProfile.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                userID:userID,
                fullName:fullName,
                username:username,
                password :password,
                tel:tel,
                email :email,

                address:address,
               
           
            }

            fetch(InsertAPIURL,{
                method:'POST',
                headers :headers,
                body:JSON.stringify(Data)
            })
            .then((response)=>response.json())
            .then((response)=>{
                alert(response[0].Message);       // If data is in JSON => Display alert msg
                this.props.navigation.navigate("Sensor");
              })

              .catch((error)=>{
                alert("Error Occured" + error);
            })
        
    
    
    }

       
    }

    fetchData = async()=>{
        const response = await fetch('http://10.0.2.2:80/api/users.php')
        const users = await response.json();
        this.setState({data:users});

    }
    componentDidMount(){
        this.fetchData();
    }

   /* onEditProfilePressed = () => {
        this.props.navigation.navigate('Monitoring');
      };*/

    render(){
        return(
            <View>
                <CustomHeader></CustomHeader>
                <Text style={styles.text}>Edit Profile</Text>

                <FlatList
                data={this.state.data}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item}) =>

                <View>
                    <View>
                    <View style={styles.container2}>
                    <View style={styles.containernew}>
                    <View style={{margin:0}}>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() =>{}}>
            <View style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                //borderEndColor: '#000000',
                //borderEndWidth: 3,
                borderWidth: 3,
                borderColor: '#BB8888',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ImageBackground
                source={{
                    uri: 'https://www.imagetranslate.com/blog/content/images/size/w1000/2022/07/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-min.jpg',
                }}
                style={{height:150, width:150}}
                imageStyle={{borderRadius: 100, borderWidth: 5, borderColor: '#BB8888'}}>


                </ImageBackground>
            </View>
        </TouchableOpacity>
        
        <Text style={styles.txt}>My registered phone number: {item.tel}</Text>
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
        <TextInput placeholder={item.userID} style={styles.input} onChangeText={userID=>this.setState({userID})}/>
        <Text style={styles.txt}>{item.userID}</Text>
        </View>

        <View style={styles.cont1}>
        <TextInput placeholder={item.fullName} style={styles.input} onChangeText={fullName=>this.setState({fullName})}/>
        <Text style={styles.txt}>{item.fullName}</Text>
        </View>

        <View style={styles.cont2}>
        <TextInput placeholder={item.username} style={styles.input} onChangeText={username=>this.setState({username})}/>
        <Text style={styles.txt}>{item.username}</Text>
        </View>

        <View style={styles.cont3}>
        <TextInput placeholder={item.password} style={styles.input} onChangeText={password=>this.setState({password})}/>
        <Text style={styles.txt}>{item.password}</Text>
        </View>

        <View style={styles.cont4}>
        <TextInput placeholder={item.tel} style={styles.input} onChangeText={tel=>this.setState({tel})}/>
        <Text style={styles.txt}>{item.tel}</Text>
        </View>

        <View style={styles.cont5}>
        <TextInput placeholder={item.email} style={styles.input} onChangeText={email=>this.setState({email})}/>
        <Text style={styles.txt}>{item.email}</Text>
        </View>

        <View style={styles.cont6}>
        <TextInput placeholder={item.address} style={styles.input} onChangeText={address=>this.setState({address})}/>
        <Text style={styles.txt}>{item.address}</Text>
        </View>

        <TouchableOpacity style={styles.cont7}  onPress={this.InsertRecord}
        //</View>onPress={this.onEditProfilePressed}
        >
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

                }

                />

                

            </View>

        );
    }

}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:"black",
        top:20,
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
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },

    cont1:{
        height:50,
        width:250,
        top:60,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont2:{
        height:50,
        width:250,
        top:70,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont3:{
        height:50,
        width:250,
        top:80,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont4:{
        height:50,
        width:250,
        top:90,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont5:{
        height:50,
        width:250,
        top:100,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont6:{
        height:50,
        width:250,
        top:110,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#E4FFCA"
    },
    cont7:{
        height:50,
        width:250,
        top:150,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#3BBD1A"


    },
    cont8:{
        height:50,
        width:250,
        top:170,
        borderRadius:50,
        borderColor:"#3BBD1A",
        borderWidth:3,
        backgroundColor:"#3BBD1A"

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
        borderColor:'#3BBD1A',
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



