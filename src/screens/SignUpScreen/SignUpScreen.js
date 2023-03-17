/*import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable} from "react-native";
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



const SignUpScreen=() =>{
    
    
    const navigation =useNavigation();
    const {height}= useWindowDimensions();
    const onSignInPressed =() =>{
        navigation.navigate('SignIn');
    }
    return(
        <View>
            <Image source={name} style={[styles.name, {height:height*0.2}]} resizeMode='contain' />

            <View style={styles.container}>
               
                <TextInput placeholder="Username" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Mobile Number" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true}/>

            </View>
            <View style={styles.container}>
                <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true}/>

            </View>
            <CustomButton text="SIGN UP">
               
            </CustomButton>
            <Text style={styles.text1}>Already have an account?</Text>
            <Pressable onPress={onSignInPressed}>
                <Text style={styles.link2}>SIGN IN</Text>
            </Pressable>

            <View>
                
            </View>
            
        </View>
        

    )
};

const styles= StyleSheet.create({
    name:{
        width:150,
        alignSelf:'center',
        top:60,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:100,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },

    input:{

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
})

export default SignUpScreen
/*import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable} from "react-native";
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AppStack from "../../navigation/AppStack";



export default class SignUpScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userID:'',
          fullName: '',
          username:'',
          tel : '',
          email:'',
          password : '',
          };
       }

       InsertRecord= async ()=>{
        var userID = this.state.userID;
        var fullName = this.state.fullName;
        var username = this.state.username;
        var tel = this.state.tel;
        var email = this.state.email;
        var password = this.state.password;

        

        if((fullName.length==0 || username.length==0|| tel.length==0)|| email.length==0 ||(password.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://222.165.186.100:80/api/signup.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                userID:userID,
                fullName:fullName,
                username:username,
                tel :tel,
                email:email,
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
                if (Response[0].Message == "Account registered successfully") {
                    console.log("true")
                    this.props.navigation.navigate('SignIn');
                }
                console.log(Data);
            })

            .catch((error)=>{
                console.error("ERROR FOUND" + error);
            })
        
    
    
    }

       
    }

    SignInPressed=()=>{
        this.props.navigation.navigate("SignIn");

    }
    
    render(){
    return(
        <View>
            <Image source={name} style={[styles.name]} resizeMode='contain' />

            <View style={styles.container}>
               <TextInput placeholder="User ID" style={styles.input} onChangeText={userID=>this.setState({userID})}/>
            </View>
            
            
            <View style={styles.container}>
               
                <TextInput placeholder="Full Name" style={styles.input} onChangeText={fullName=>this.setState({fullName})}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Username" style={styles.input} onChangeText={username=>this.setState({username})}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Mobile Number" style={styles.input} onChangeText={tel=>this.setState({tel})} />

            </View>
            <View style={styles.container}>
                <TextInput placeholder="Email Address" style={styles.input} onChangeText={email=>this.setState({email})} />

            </View>

            <View style={styles.container}>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={password=>this.setState({password})}/>

            </View>
            <View style={{bottom:10}}>
                <CustomButton onPress={this.InsertRecord} text="SIGN UP"> </CustomButton>
            </View>
            <Text style={styles.text1}>Already have an account?</Text>
            <Pressable >
                <Text style={styles.link2} onPress={this.SignInPressed}>SIGN IN</Text>
            </Pressable>

            <View>
                
            </View>
            
        </View>
        

    )
    }
};

const styles= StyleSheet.create({
    name:{
        width:150,
        alignSelf:'center',
        top:80,
    },
    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:120,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{

    },

    text1:{
        alignSelf:"center",
        top:140,
        fontWeight:"bold",


    },
    
    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:120,
        alignSelf:"flex-end",
        paddingRight:70,

    },
})
*/

import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable} from "react-native";
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



export default class SignUpScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userID:'',
          fullName: '',
          username:'',
          tel : '',
          email:'',
          password : '',
          };
       }

       InsertRecord= async ()=>{
        var userID = this.state.userID;
        var fullName = this.state.fullName;
        var username = this.state.username;
        var tel = this.state.tel;
        var email = this.state.email;
        var password = this.state.password;

        

        if((fullName.length==0 || username.length==0|| tel.length==0)|| email.length==0 ||(password.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://10.0.2.2:80/api/signup.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                userID:userID,
                fullName:fullName,
                username:username,
                tel :tel,
                email:email,
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
                if (Response[0].Message == "Account registered successfully") {
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

    SignInPressed=()=>{
        this.props.navigation.navigate("SignIn");

    }
    
    render(){
    return(
        <View>
            <Image source={name} style={[styles.name]} resizeMode='contain' />

            <View style={styles.container}>
               <TextInput placeholder="User ID" style={styles.input} onChangeText={userID=>this.setState({userID})}/>
            </View>
            
            
            <View style={styles.container}>
               
                <TextInput placeholder="Full Name" style={styles.input} onChangeText={fullName=>this.setState({fullName})}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Username" style={styles.input} onChangeText={username=>this.setState({username})}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Mobile Number" style={styles.input} onChangeText={tel=>this.setState({tel})} />

            </View>
            <View style={styles.container}>
                <TextInput placeholder="Email Address" style={styles.input} onChangeText={email=>this.setState({email})} />

            </View>

            <View style={styles.container}>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={password=>this.setState({password})}/>

            </View>
            <View style={{bottom:10}}>
                <CustomButton onPress={this.InsertRecord} text="SIGN UP"> </CustomButton>
            </View>
            <Text style={styles.text1}>Already have an account?</Text>
            <Pressable onPress={this.SignInPressed}>
                <Text style={styles.link2}>SIGN IN</Text>
            </Pressable>

            <View>
                
            </View>
            
        </View>
        

    )
    }
};

const styles= StyleSheet.create({
    name:{
        width:150,
        alignSelf:'center',
        top:80,
    },
    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:120,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{

    },

    text1:{
        alignSelf:"center",
        top:140,
        fontWeight:"bold",


    },
    
    link2:{
        color:"#42CC3F",
        fontWeight:"bold",
        top:120,
        alignSelf:"flex-end",
        paddingRight:70,

    },
})
