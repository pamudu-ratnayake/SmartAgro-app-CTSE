import React from "react";
import{View,Text,Image,StyleSheet,TextInput, useWindowDimensions,Pressable, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import name from '../../../assets/images/name.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader";
import CustomBtn2 from "../../components/CustomBtn2/CustomBtn2";
import CustomBtn3 from "../../components/CustomBtn3/CustomBtn3";
import ed from "../../../assets/images/eded.png";
import CustomHeader2 from "../../components/CustomHeader2";
import CustomHeader1 from "../../components/CustomHeader1";



export default class Monitoring extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          threshold_id:'',
          crop_id: '',
          userID:'',
          farm_address : '',
          lc_id:'',
          min_temp : '',
          max_hum:'',
          min_hum: '',
          max_sMois:'',
          min_sMois : '',
          max_sTemp:'',
          min_sTemp : '',
          max_sec:'',
          min_sec : '',
          max_ph:'',
          min_ph: '',
          max_n:'',
          min_n : '',
          max_p:'',
          min_p : '',
          max_k:'',
          min_k : '',
          max_r:'',
          min_r: '',
          max_temp:'',
         
          
          };
       }
       InsertRecord= async ()=>{
        var threshold_id = this.state.threshold_id;
        var crop_id = this.state.crop_id;
        var userID = this.state.userID;
        var farm_address = this.state.farm_address;
        var lc_id = this.state.lc_id;
        var min_temp = this.state.min_temp;
        var max_hum = this.state.max_hum;
        var min_hum = this.state.min_hum;
        var max_sMois = this.state.max_sMois;
        var min_sMois = this.state.min_sMois;
        var max_sTemp = this.state.max_sTemp;
        var min_sTemp = this.state.min_sTemp;

        var max_sec = this.state.max_sec;
        var min_sec = this.state.min_sec;
        var max_ph = this.state.max_ph;
        var min_ph = this.state.min_ph;
        var max_n = this.state.max_n;
        var min_n = this.state.min_n;

        var max_p = this.state.max_p;
        var min_p = this.state.min_p;
        var max_k = this.state.max_k;
        var min_k = this.state.min_k;
        var max_r = this.state.max_r;
        var min_r = this.state.min_r;
        var max_temp = this.state.max_temp;

        if((
            threshold_id.length==0 ||
             crop_id.length==0|| userID.length==0|| farm_address.length==0 ||lc_id.length==0 ||min_temp.length==0 ||max_hum.length==0 ||min_hum.length==0 ||max_sMois.length==0 ||min_sMois.length==0 ||max_sTemp.length==0 ||min_sTemp.length==0 ||max_sec.length==0 ||min_sec.length==0 ||max_ph.length==0 ||min_ph.length==0 ||max_n.length==0 ||min_n.length==0 ||max_p.length==0 ||min_p.length==0 ||max_k.length==0 ||min_k.length==0 ||max_r.length==0 ||min_r.length==0 ||max_temp.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://10.0.2.2:80/api/threshold.php"
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            }

            var Data={
                threshold_id:threshold_id,
                crop_id:crop_id,
                userID:userID,
                farm_address :farm_address,
                lc_id:lc_id,
                min_temp :min_temp,

                max_hum:max_hum,
                min_hum:min_hum,
                max_sMois:max_sMois,
                min_sMois :min_sMois,
                max_sTemp:max_sTemp,
                min_sTemp :min_sTemp,

                max_sec:max_sec,
                min_sec:min_sec,
                max_ph:max_ph,
                min_ph :min_ph,
                max_n:max_n,
                min_n :min_n,

                max_p:max_p,
                min_p:min_p,
                max_k:max_k,
                min_k :min_k,
                max_r:max_r,
                min_r :min_r,
                max_temp :max_temp,
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
    
 
       render(){ 
    return(
        <ScrollView contentContainerStyle={{
            paddingBottom: 130
          }}>
        <CustomHeader1></CustomHeader1>
        <Text style={styles.text}>Thresold Configurations</Text>
           
<View style={styles.container2}>
<View style={styles.column}>
<View style={styles.row}>

            <View style={styles.container}>
               
                <TextInput placeholder="Threshold ID" style={styles.input} onChangeText={threshold_id=>this.setState({threshold_id})}/>
                <Text style={styles.txt1}>Threshold ID</Text>
            </View>
</View>
<View style={styles.row}>

<View style={styles.container}>
   
    <TextInput placeholder="User ID" style={styles.input} onChangeText={userID=>this.setState({userID})}/>
    <Text style={styles.txt1}>User ID</Text>
</View>
</View>
</View>

<View style={styles.row}>

            <View style={styles.container}>
                <TextInput placeholder="Farm ID" style={styles.input} onChangeText={lc_id=>this.setState({lc_id})}/>
                <Text style={styles.txt1}>Farm ID</Text>
            </View>
            </View>

            <View style={styles.row}>
            <View style={styles.container}>
                <TextInput placeholder="Crop" style={styles.input} 
                //secureTextEntry={true}
                onChangeText={crop_id=>this.setState({crop_id})}

                />
                <Text style={styles.txt1}>Crop</Text>

            </View>
            </View>

            <View style={styles.row}>
  
            <View style={styles.container}>

                <TextInput placeholder="Location" style={styles.input} 
                //secureTextEntry={true}
                onChangeText={farm_address=>this.setState({farm_address})}
                />
                <Text style={styles.txt1}>Location</Text>

            </View>
            </View>

            <View style={styles.row}>
  
            <View style={styles.container}>
                <TextInput placeholder="Max " style={styles.input} 
                //secureTextEntry={true}
                onChangeText={max_sTemp=>this.setState({max_sTemp})}
                />
                <Text style={styles.txt1}>Soil Temperature</Text>

            </View>
            </View>
            <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Min " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={min_sTemp=>this.setState({min_sTemp})}
      />
      <Text style={styles.txt1}></Text>

  </View>
  </View>
  <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={max_sMois=>this.setState({max_sMois})}

      />
      <Text style={styles.txt1}>Soil Moisture</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_sMois=>this.setState({min_sMois})}
/>
<Text style={styles.txt1}></Text>

</View>
</View>
                 <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
     // secureTextEntry={true}
     onChangeText={max_temp=>this.setState({max_temp})}

      />
      <Text style={styles.txt1}>Ambient Temperature</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_temp=>this.setState({min_temp})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>  
           <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input}
       //secureTextEntry={true}
       onChangeText={max_hum=>this.setState({max_hum})}
       />
      <Text style={styles.txt1}>Air Humidity</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_hum=>this.setState({min_hum})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>
           <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={max_ph=>this.setState({max_ph})}
      />
      <Text style={styles.txt1}>Soil PH</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_ph=>this.setState({min_ph})}
/>
<Text style={styles.txt1}></Text>

</View>
</View>    
           <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
     // secureTextEntry={true}
     onChangeText={max_sec=>this.setState({max_sec})}
      />
      <Text style={styles.txt1}>Soil Electrical Conductivity</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input}
// secureTextEntry={true}
onChangeText={min_sec=>this.setState({min_sec})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>  
           <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={max_n=>this.setState({max_n})}

      />
      <Text style={styles.txt1}>Soil Nitrogen</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_n=>this.setState({min_n})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>  
 <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      
      onChangeText={max_p=>this.setState({max_p})}
      />
      <Text style={styles.txt1}>Soil Phosphorous</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_p=>this.setState({min_p})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>  
 <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={max_k=>this.setState({max_k})}

      />
      <Text style={styles.txt1}>Soil Potassium</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input} 
//secureTextEntry={true}
onChangeText={min_k=>this.setState({min_k})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>
 <View style={styles.row}>
  
  <View style={styles.container}>
      <TextInput placeholder="Max " style={styles.input} 
      //secureTextEntry={true}
      onChangeText={max_r=>this.setState({max_r})}
      />
      <Text style={styles.txt1}>Rain</Text>

  </View>
  </View>
  <View style={styles.row}>

<View style={styles.container}>
<TextInput placeholder="Min " style={styles.input}
// secureTextEntry={true}
onChangeText={min_r=>this.setState({min_r})}

/>
<Text style={styles.txt1}></Text>

</View>
</View>
            <CustomBtn2 text="SAVE" style={styles.btn} onPress={this.InsertRecord}>
               
            </CustomBtn2>
            
              
          

            <View>
                
            </View>
            </View>
        </ScrollView>
        

    )
};
       }
       

const styles= StyleSheet.create({
    name:{
        width:150,
        alignSelf:'center',
        top:60,
    },

    container:{
        backgroundColor:'#FFFFFF',
        width:'60%',
        borderRadius:50,
        borderColor:'#3BBD1A',
        borderWidth:3,
        position:"relative",
        left:120,
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
        color:'#ffffff'


    },
    text:{
        fontSize:25,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
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
      top:50
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
    },
    txt1:{
        fontSize:15,
        top:-35,
        fontWeight:"bold",
        left:-150

        
    }
})

