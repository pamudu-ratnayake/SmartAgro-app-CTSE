import React, {useState} from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable,Switch} from "react-native";
import CustomHeader from "../../components/CustomHeader";


const ControllerScreen = () =>{
    const [isEnabled,setIsEnabled] = useState(false)
    
    const toggleSwitch =() =>{
        setIsEnabled(previousState=>!previousState)
    }
    
    return(
        <View>
            <CustomHeader></CustomHeader>

            <View style={styles.container}>
                <Text style={styles.text}>Controller 1</Text>

                <View style={styles.row}>
                    <View style={styles.container1}>
                        <TextInput placeholder="" style={styles.input}/>
                    </View>

                    <View style={styles.container1}>
                        <TextInput placeholder="minutes" style={styles.input}/>
                    </View>

                    <Pressable style={styles.button1}>
                        <Text style={styles.btnTxt}> ADD</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <View style={styles.cont}>
                        
                        <Switch
                            trackColor={{ false: "#42CC3F", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform: [{ scaleX: 2 }, { scaleY: 2}], bottom:5, right:100 }}
                        /> 
                    
                    </View>
                    <Switch
                        trackColor={{ false: "#42CC3F", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2}], bottom:5, right:150 }}
                    
                    
                    />

                    
                </View>
                
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Controller 2</Text>

                <View style={styles.row}>
                    <View style={styles.container1}>
                        <TextInput placeholder="" style={styles.input}/>
                    </View>

                    <View style={styles.container1}>
                        <TextInput placeholder="minutes" style={styles.input}/>
                    </View>

                    <Pressable style={styles.button1}>
                        <Text style={styles.btnTxt}> ADD</Text>
                    </Pressable>
                </View>

                <View style={styles.row}>
                    <View style={styles.cont}>
                    
                        <Switch
                            trackColor={{ false: "#42CC3F", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform: [{ scaleX: 2 }, { scaleY: 2}], bottom:5, right:100 }}
                        /> 
                    
                    </View>
                    <Switch
                        trackColor={{ false: "#42CC3F", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2}], bottom:5, right:150 }}
                    
                    
                    />

                    
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color:"black",
        top:10,
        left:20,
        fontWeight:"bold"
        
    },
    cont:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        

    },
    container:{
        width:350,
        height:200,
        borderRadius:40,
        borderColor:"#73C971",
        borderWidth:2,
        top:50,
        marginHorizontal:10,
        alignSelf:"center",
        marginVertical:15,
        
    },

    container1:{
        backgroundColor:"#A3EFA1",
        width:100,
        height:50,
        borderRadius:10,
        top: 30,
    },

    row:{
        
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-around",

    },
    
    button1:{
        backgroundColor:'#42CC3F',
        width:90,
        height:50,
        top:30,
        
        borderRadius:30,

    },
    btnTxt:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:15,
        fontWeight:'bold',
    },
    input:{
        alignSelf:"center",
    }


})




export default ControllerScreen