import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

function VetorIcons() {
    return (
        <View style={styles.container}>
            <Text><Icon name="account-group" size={64} color="#777" />
            </Text>
            <View style={styles.button}>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3B5998"
                    onPress={() => { alert('Facebook') }}
                >
                    Facebook
                </Icon.Button>
            </View>
            <View style={styles.button}>
                <Icon.Button
                    name="twitter"
                    backgroundColor="#1DA1F2"
                    onPress={() => { alert('Twitter') }}
                >
                    Twitter
                </Icon.Button>
            </View>
            <View style={styles.button}>
                <Icon.Button
                    name="instagram"
                    backgroundColor="#F77737"
                    onPress={() => { alert('Instagram') }}
                >
                    Instagram
                </Icon.Button></View>
            <View style={styles.button}>
                <Icon.Button
                    name="github"
                    backgroundColor="#6e5494"
                    onPress={() => { alert('Github') }}
                >
                    Github
                </Icon.Button>
            </View>
        </View>
    )
}
export default VetorIcons