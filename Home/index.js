import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Toolbar from '../ToolBar';
function Home(props) {
    const navigation = useNavigation()
    function navegar() {
        navigation.navigate('Create', { data: 'Parâmetro' })
        console.log(props)
    }
    return (
        <View style={styles.container}>
            <Toolbar title={props.route.params.user} />
        </View>
    )
}
export default Home