import React from "react";
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

import styles from "./styles";


function ToolBar(props) {
    const navigation = useNavigation()
    
    function navegar() {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.barra}>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.barraRight}>
                <Icon.Button
                    style={styles.buttom}
                    name="logout"
                    onPress={() => navegar()}
                    backgroundColor="#6E5494"
                    size={30}

                />
            </View>
        </View>
    )
}

export default ToolBar