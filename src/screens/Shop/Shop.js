import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable, ScrollView} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import harvest from '../../assets/images/harvest.png';
import analysis from '../../assets/images/analysis.png';
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";


export default class Shop extends React.Component{
    
    state = {
        data:[]
    }

    fetchData = async()=>{
        const response = await fetch('http://10.0.2.2:80/api/items.php')
        const users = await response.json();
        this.setState({data:users});

    }
    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <View>
                <CustomHeader></CustomHeader>
                <Text style={styles.text}>Shop</Text>

                <FlatList
                data={this.state.data}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item}) =>

                <View>
                    <View>
                        
                    </View>
                    
                    <View style={styles.Container}>
                   { /*<Text style={styles.txt}>{item.first_name}</Text>
                    <Text style={styles.txt}>{item.last_name}</Text>
                    <Text style={styles.txt}>{item.advisor_nic}</Text>
                    <Text style={styles.txt}>{item.advisor_qualification}</Text>
                    <Text style={styles.txt}>{item.advisor_experience}</Text>
                    <Text style={styles.txt}>{item.crop_category}</Text>
                    <Text style={styles.txt}>{item.contact_number}</Text>*/}
                    <ScrollView
  horizontal={true}
  >
                    <Text style={styles.txt}>{item.item_title}</Text>
                    </ScrollView>
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
    Container:{
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
        color:"black",
        top:25,
        fontWeight:"bold",
        
        

    }
})



//export default Shop

/*import React, { useEffect, useState } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable,FlatList} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import AddPicture from '../../../assets/images/AddPicture.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import eggplant from '../../../assets/images/eggplant.png';
import pumpkin from '../../../assets/images/pumpkin.png';
import pineapple from '../../../assets/images/pineapple.png';
import grapes from '../../../assets/images/grapes.png';
import rose from '../../../assets/images/rose.png';
import med from '../../../assets/images/med.png';


const Shop=() =>{
    const navigation =useNavigation();

    const[item, setItem] = useState(null);

    const getData = async () => {
        const data = {
            category: item
        };
        fetch("http://222.165.186.100:80/mobile_services/api/cropAdvisory_json.php", {
            method: "POST",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application.json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            navigation.navigate('Advisory1',{ users: JSON.stringify(data)});
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        if(item !== null) {
           getData();
        }
    }, [item])
    
    return(
        <View>
            <CustomHeader></CustomHeader>

            <View style={[styles.container, {top:40}]}>
                <Text style={styles.txt}>Fertilizers</Text>

            </View>

            <View style={styles.column}>
            <View style={styles.row}>
                    <Pressable onPress={() =>setItem('Brinjal')} style={styles.container1}>
                        <Image source={eggplant} style={styles.image}></Image>
                        <Text style={styles.text}>Brinjal</Text>
                    </Pressable>
                    <Pressable onPress={() =>setItem('Pumpkin')} style={styles.container1}>
                        <Image source={pumpkin} style={styles.image}></Image>
                        <Text style={styles.text}>Pumpkin</Text>
                    </Pressable>

                    
                
            </View>

            </View>

            <View style={[styles.container, {top:180}]} >
                <Text style={styles.txt}>Fruits</Text>

            </View>

            <View style={styles.column}>
            <View style={styles.row}>
                    <Pressable  style={[styles.container1, {top:200}]} >
                        <Image source={pineapple} style={styles.image}></Image>
                        <Text style={styles.text}>Pineapple</Text>
                    </Pressable>
                    <Pressable style={[styles.container1, {top:200}]} >
                        <Image source={grapes} style={styles.image}></Image>
                        <Text style={[styles.text, {top:1}]}>Grape</Text>
                    </Pressable>

                    
                
            </View>

            </View>

            <View style={[styles.container, {top:320}]} >
                <Text style={styles.txt}>Home Gardening and Landscaping</Text>

            </View>

            <View style={styles.column}>
            <View style={styles.row}>
                    <Pressable  style={[styles.container1, {top:330}]} >
                        <Image source={rose} style={styles.image}></Image>
                        <Text style={[styles.text, {top:10}]} >Roses</Text>
                    </Pressable>
                    <Pressable style={[styles.container1, {top:330}]} >
                        <Image source={med} style={styles.image}></Image>
                        <Text style={[styles.text, {top:30}]}>Herbs</Text>
                    </Pressable>

                    
                
            </View>

            </View>

            
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
        backgroundColor:"#8DE28C",
        height:40,
        

    },

    container1:{
        width:110,
        height:100,
        borderRadius:40,
        borderColor:"#73C971",
        borderWidth:2,
        left:65,
        top:60,
        marginHorizontal:10,

    },

    txt:{
        alignSelf:"flex-start",
        fontSize:18,
        fontWeight:"bold",
        left:30

    },

    row:{
        
        flex: 2,
        flexDirection: "row",
        
        

    },

    column:{
        flex: 4,
        flexDirection: "column",
        justifyContent: 'space-between',

    },

    image:{
        alignSelf:"center",
        top:10,
        
    },

    text:{
        fontSize:12,
        fontWeight:"bold",
        alignSelf:"center",
        top:15
    }
   
})


export default Shop*/