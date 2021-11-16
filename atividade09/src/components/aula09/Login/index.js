import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {Provider as PaperProvider, TextInput} from "react-native-paper"
function Login() {
    const navigation = useNavigation()
    const [login, setLogin] = useState("")
    function navegar() {

        navigation.navigate('Home', { user:login })
        console.log(login)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Área Restrita</Text>
            <TextInput
                style={styles.input}
                label="login"
                onChangeText={text => setLogin(text)}
            // value={text}
            />
            <TextInput
                style={styles.input}
                label="senha"
            />
            <View style={styles.button}>
                <Button
                    title="Autenticar"
                    onPress={() => navegar()}
                    color="#6E5494"
                />
            </View>
        </View>
    )
}
export default Login