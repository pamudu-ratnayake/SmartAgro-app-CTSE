import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import harvest from '../../assets/images/harvest.png';
import analysis from '../../assets/images/analysis.png';
import controllers from '../../../assets/images/controllers.png';
import yields from '../../../assets/images/yield.png';
import charts from '../../../assets/images/charts.png';
import { useNavigation } from "@react-navigation/native";


const YieldScreen=() =>{
    const navigation =useNavigation();

    const onAddharvest=() =>{
        navigation.navigate('Harvest');
    }

    const onProfitAnalysis=() =>{
        navigation.navigate('Charts');          //For demonstration purpose. Change the navigation after
    }
    const onChartsPressed=() =>{
        navigation.navigate('YieldDash');          //For demonstration purpose. Change the navigation after
    }
    return(
        <View>
            <CustomHeader></CustomHeader>
            <View>
                <Text style={styles.text}>My Yield</Text>
            </View>

            <View style={styles.column}>
            <View style={styles.row}>
                <Pressable onPress={onAddharvest} style={styles.container}>
                    <Image source={harvest} style={styles.image}></Image>
                    <Text style={styles.txt}>Add harvest</Text>
                </Pressable>
                <Pressable onPress={onProfitAnalysis} style={styles.container}>
                    <Image source={analysis} style={styles.image}></Image>
                    <Text style={styles.txt}>Profit Analysis</Text>
                </Pressable>
            </View>

            <View style={styles.row}>

    <Pressable 
onPress={onChartsPressed} 
    style={styles.container2}>
        <Image source={charts} style={styles.image2}></Image>
        <Text style={styles.txt}>Yield Graphs</Text>
    </Pressable>

</View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
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
    container2:{
        width:140,
        height:140,
        borderRadius:20,
        
        borderColor:"#73C971",
        borderWidth:2,
        left:125,
        top:250,
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
    image2:{
        alignSelf:"center",
        height:90,
        width:90,
        top:10,
    },

    
    
    txt:{
        alignSelf:"center",
        color:"black",
        top:25,
        fontWeight:"bold",
        
        

    }
})



export default YieldScreen