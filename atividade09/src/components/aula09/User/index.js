import React from "react";
import {View, Text} from "react-native"
import ToolBar from "../ToolBar";
import styles from "./styles";

function User(){
    return(
        <View style={styles.container}>
            <ToolBar title="Minha Conta"/>
        </View>
    )
}


export default User