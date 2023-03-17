import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,useState, TextInput, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";



export default class FertilizerScreen extends React.Component {
    
    state = {
        data:[]
    }

    fetchData = async()=>{
        const response = await fetch('http://222.165.186.100:80/mobile_services/api/fertilizer_json.php')
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
                <Text style={styles.text}>Fertilizer Providers</Text>

                <FlatList
                data={this.state.data}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item}) =>

                <View>
                    <View>
                        
                    </View>
                    
                    <View style={styles.Container}>
                    <Text style={styles.txt}>{item.fertilizer_company}</Text>
                    <Text style={styles.txt}>{item.fertilizer_address}</Text>
                    <Text style={styles.txt}>{item.fertilizer_phone}</Text>
                    <Text style={styles.txt}>{item.fertilizer_fax}</Text>
                    <Text style={styles.txt}>{item.fertilizer_email}</Text>
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
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        top:10,
        

    },

    txt:{
        //alignSelf:'center',
        fontSize:15,
        color:'black',
        left:40,
        top:10,

    },

    Container:{
        width:300,
        height:180,
        borderRadius:30,
        borderColor:"#73C971",
        borderWidth:2,
        marginHorizontal:10,
        top:10,
        alignSelf:'center',
        margin:10,

    }
    
});