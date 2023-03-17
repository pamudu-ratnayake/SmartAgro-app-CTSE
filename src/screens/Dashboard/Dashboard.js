import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import farm from '../../../assets/images/farm.png';
import crops from '../../../assets/images/crops.png';
import controllers from '../../../assets/images/controllers.png';
import yields from '../../../assets/images/yield.png';
import sub from '../../../assets/images/sub.png';
import shop from '../../../assets/images/shop.png';
import { useNavigation } from "@react-navigation/native";

const Dashboard=() =>{
    const navigation =useNavigation();

    const onFarmPressed=() =>{
        navigation.navigate('MyFarm');
    }
    

    const onControllersPressed=() =>{
        navigation.navigate('Controller');
    }

    const onYieldPressed=() =>{
        navigation.navigate('Yield');
    }
    
    const onSubscriptionPressed=() =>{
        navigation.navigate('Subscription');
    }
    const onNewCropsPressed=() =>{
        navigation.navigate('NewCrops');
    }
    const onShopPressed=()=>{
        navigation.navigate('ShopDetails');
    }
    return(
        <View>
            <CustomHeader></CustomHeader>
            <View>
                <Text style={styles.text}>Dashboard</Text>
            </View>

            <View style={styles.column}>
            
            <View style={styles.row}>
                <Pressable onPress={onFarmPressed} style={styles.container}>
                    <Image source={farm} style={styles.image}></Image>
                    <Text style={styles.txt}>My Farm</Text>
                </Pressable>
                <Pressable style={styles.container} onPress={onNewCropsPressed}>
                    <Image source={crops} style={styles.image}></Image>
                    <Text style={styles.txt}>New Crops</Text>
                </Pressable>
            
            </View>

            <View style={styles.row}>

                <Pressable onPress={onControllersPressed} style={styles.container2}>
                    <Image source={controllers} style={styles.image}></Image>
                    <Text style={styles.txt}>Controllers</Text>
                </Pressable>
                <Pressable onPress={onYieldPressed} style={styles.container2}>
                    <Image source={yields} style={styles.image}></Image>
                    <Text style={styles.txt}>Yield</Text>
                </Pressable>
            </View>

            <View style={styles.row}>

                <Pressable onPress={onSubscriptionPressed} style={styles.container3}>
                    <Image source={sub} style={styles.image}></Image>
                    <Text style={styles.txt}>Subscriptions</Text>
                </Pressable>
                <Pressable onPress={onShopPressed} style={styles.container3}>
                    <Image source={shop} style={styles.image}></Image>
                    <Text style={styles.txt}>Shop</Text>
                </Pressable>
            </View>
            
            

            
        </View>
    </View>
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
    }

    
    
   
})




export default Dashboard