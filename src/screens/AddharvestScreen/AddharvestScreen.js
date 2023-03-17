import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



export default class AddharvestScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          farmerName : '',
          cropName : '',
          quantity : '',
          unitPrice : '',

          
        };
      }

      InsertRecord=() =>{
        var farmerName=this.state.farmerName;
        var cropName =this.state.cropName;
        var quantity = this.state.quantity;
        var unitPrice =this.state.unitPrice;

        if((cropName.length==0|| farmerName.length==0||quantity.length==0||unitPrice.length==0)){
            alert("Required Field is Missing");
        }

        else{
            var InsertAPIURL ="http://222.165.186.100:80/mobile_services/api/yieldData.php";

            var headers ={
                'Accept' : 'application/json',
                'Content-Type' :'application/json',
            };

            var Data ={
                farmerName:farmerName,
                cropName:cropName,
                quantity : quantity,
                unitPrice:unitPrice
            };
            
            fetch(InsertAPIURL,{
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data) //convert data to JSON
            })
            .then((response)=>response.json())
            .then((response)=>{
                alert(response[0].Message);       // If data is in JSON => Display alert msg
                this.props.navigation.navigate("Yield");
              })

              .catch((error)=>{
                alert("Error Occured" + error);
            })
            





        }
      }
    
    render(){
    return(
        
        <View>
            <CustomHeader></CustomHeader>

            <View>
                <Text style={styles.text}>Add your harvest</Text>
            </View>
            
            <Text style={styles.text1}>Farmer Name</Text>
            <View style={styles.container}>
                <TextInput 
                placeholder="" 
                style={styles.input}
                onChangeText={farmerName=>this.setState({farmerName})}
                />
            </View>
            
            
        

            <Text style={styles.text1}>Crop Name</Text>
            <View style={styles.container}>
                <TextInput 
                placeholder="" 
                style={styles.input}
                onChangeText={cropName=>this.setState({cropName})}
                />
            </View>

            <Text style={styles.text1}>Harvest(Kg)</Text>
            <View style={styles.container}>
                <TextInput 
                placeholder="" 
                style={styles.input}
                onChangeText={quantity=>this.setState({quantity})}
                />
            </View>

            <Text style={styles.text1}>Price per unit (LKR)</Text>
            <View style={styles.container}>
                <TextInput 
                placeholder="" 
                style={styles.input}
                onChangeText={unitPrice=>this.setState({unitPrice})}
                />
            </View>
            <View style={{bottom:50,}}>
                <CustomButton onPress={this.InsertRecord} text="Save"></CustomButton>
            </View>
        
        </View>
    )
}
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
    },

    text1:{
        color:"black",
        top:70,
        paddingLeft:50,
        fontSize:15,

    },
    container:{
        backgroundColor:'ivory',
        width:'65%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:70,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
})



