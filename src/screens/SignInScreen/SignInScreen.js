/*import React, { Component, useContext } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable} from "react-native";
import image1 from '../../../assets/images/image1.png';
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from 'react-native-async-storage/async-storage';
import { AuthContext } from "../../context/AuthContext";

    

   // render() {
    const SignInScreen = ({navigation})=>{

    
      const {login} = useContext(AuthContext);  
        
        
    return(
        
        <View>
            <Image source={image1} style={[styles.image]} resizeMode='contain' />
            <Image source={name} style={[styles.name ]} resizeMode='contain' />
            <View style={styles.container}>
                <TextInput 
                    placeholder="Mobile Number" 
                    style={styles.input}
                    keyboardType={"numeric"}
                    onChangeText={tel=>this.setState({tel})}
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    secureTextEntry={true}
                    onChangeText={password=>this.setState({password})}
                />

            </View>
            
            <Pressable >
                <Text style={styles.link1}>Forgot password?</Text>
                
            </Pressable>
            <CustomButton  onPress={()=>{login()}}  text="LOGIN"></CustomButton>
            <Text style={styles.text1}>Don't have an account?</Text>
            
            <Pressable 
            //onPress={()=>{login()}}
               // this.SignupPressed
              //  }
              onPress={() => navigation.navigate('SignUp')}
            
            >
                <Text style={styles.link2}>SIGN UP</Text>
            </Pressable>
            
        </View>

    
    );
}
//}
//}



const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:40,
    },
    image:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
        alignSelf:'center',
        top:100,
        
        
        
    },

    name:{
        width:'60%',
        alignSelf:'center',
        maxWidth:100,
        maxHeight:150,
        top:100,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:140,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{
        paddingLeft:30,

    },

    link1:{
        top:130,
        alignSelf:"flex-end",
        paddingRight:30,
        fontWeight:"bold",

    },

    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:75,

    },

    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",

    },
    
    
});
export default SignInScreen;
/*import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,useState, TextInput, Pressable} from "react-native";
import image1 from '../../../assets/images/image1.png';
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



export default class SignInScreen extends React.Component {
   constructor(props) {
        super(props);
        this.state = { 
          tel : '',
          password : '',
          };
       }

     InsertRecord= async ()=>{
        var tel = this.state.tel;
        var password = this.state.password;

        

        if((tel.length==0) ||(password.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://222.165.186.100:80/api/signin.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                tel :tel,
                password :password
            }

            fetch(InsertAPIURL,{
                method:'POST',
                headers :headers,
                body:JSON.stringify(Data)
            })
            .then((Response)=>Response.json())
            .then((Response)=>{
                alert(Response[0].Message)
                if (Response[0].Message == "Success") {
                    console.log("true")
                    this.props.navigation.navigate("App");
                }
                console.log(Data);
            })

            .catch((error)=>{
                console.error("ERROR FOUND" + error);
            })
        
    
    
    }

       
    }

    SignupPressed=()=>{
        this.props.navigation.navigate("SignUp");

    }

    ForgotPasswordPressed=()=>{
        this.props.navigation.navigate("Forgot");

    }
    
    

    render() {
        
    return(
        <View>
            <Image source={image1} style={[styles.image]} resizeMode='contain' />
            <Image source={name} style={[styles.name ]} resizeMode='contain' />
            <View style={styles.container}>
                <TextInput 
                    placeholder="Mobile Number" 
                    style={styles.input}
                    keyboardType={"numeric"}
                    onChangeText={tel=>this.setState({tel})}
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    secureTextEntry={true}
                    onChangeText={password=>this.setState({password})}
                />

            </View>
            <Pressable >
                <Text style={styles.link1} onPress={this.ForgotPasswordPressed}>Forgot password?</Text>
            </Pressable>
            <CustomButton  onPress={this.InsertRecord}  text="LOGIN"></CustomButton>
            <Text style={styles.text1}>Don't have an account?</Text>
            
            <Pressable >
                <Text style={styles.link2} onPress={this.SignupPressed}>SIGN UP</Text>
            </Pressable>
            
        </View>

    
    );
}
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:40,
    },
    image:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
        alignSelf:'center',
        top:100,
        
        
        
    },

    name:{
        width:'60%',
        alignSelf:'center',
        maxWidth:100,
        maxHeight:150,
        top:100,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:140,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{
        paddingLeft:30,

    },

    link1:{
        top:130,
        alignSelf:"flex-end",
        paddingRight:30,
        fontWeight:"bold",

    },

    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:75,

    },

    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",

    },
    
    
});
*/



import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,useState, TextInput, Pressable} from "react-native";
import image1 from '../../../assets/images/image1.png';
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



export default class SignInScreen extends React.Component {
   constructor(props) {
        super(props);
        this.state = { 
          tel : '',
          password : '',
          };
       }

     InsertRecord= async ()=>{
        var tel = this.state.tel;
        var password = this.state.password;

        

        if((tel.length==0) ||(password.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://222.165.186.100:80/mobile_services/api/signin.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                tel :tel,
                password :password
            }

            fetch(InsertAPIURL,{
                method:'POST',
                headers :headers,
                body:JSON.stringify(Data)
            })
            .then((Response)=>Response.json())
            .then((Response)=>{
                alert(Response[0].Message)
                if (Response[0].Message == "Success") {
                    console.log("true")
                    this.props.navigation.navigate("App");
                }
                console.log(Data);
            })

            .catch((error)=>{
                console.error("ERROR FOUND" + error);
            })
        
    
    
    }

       
    }

    SignupPressed=()=>{
        this.props.navigation.navigate("SignUp");

    }

    ForgotPasswordPressed=()=>{
        this.props.navigation.navigate("Forgot");

    }
    
    

    render() {
        
    return(
        <View>
            <Image source={image1} style={[styles.image]} resizeMode='contain' />
            <Image source={name} style={[styles.name ]} resizeMode='contain' />
            <View style={styles.container}>
                <TextInput 
                    placeholder="Mobile Number" 
                    style={styles.input}
                    keyboardType={"numeric"}
                    onChangeText={tel=>this.setState({tel})}
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    secureTextEntry={true}
                    onChangeText={password=>this.setState({password})}
                />

            </View>
            <Pressable >
                <Text style={styles.link1} onPress={this.ForgotPasswordPressed}>Forgot password?</Text>
            </Pressable>
            <CustomButton  onPress={this.InsertRecord}  text="LOGIN"></CustomButton>
            <Text style={styles.text1}>Don't have an account?</Text>
            
            <Pressable >
                <Text style={styles.link2} onPress={this.SignupPressed}>SIGN UP</Text>
            </Pressable>
            
        </View>

    
    );
}
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:40,
    },
    image:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
        alignSelf:'center',
        top:100,
        
        
        
    },

    name:{
        width:'60%',
        alignSelf:'center',
        maxWidth:100,
        maxHeight:150,
        top:100,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:140,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{
        paddingLeft:30,

    },

    link1:{
        top:130,
        alignSelf:"flex-end",
        paddingRight:30,
        fontWeight:"bold",

    },

    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:75,

    },

    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",

    },
    
    
});








