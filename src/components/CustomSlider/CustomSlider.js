import React from "react";
import { View,Switch} from "react-native";

export default function CustomSlider(props){
    return(
        <View>
            <Switch>
                trackColor={{false:"red",true:"green"}}
                thumbColor={"black"}
                onValueChange={props.toggleSwitch}
                value ={props.isEnabled}

            </Switch>

        </View>
    )
}

