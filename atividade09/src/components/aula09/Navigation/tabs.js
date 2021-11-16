import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Home, Book, User} from "./../utils"

const Tab = createBottomTabNavigator()
const icons = {
    Home: {
        name: 'home'
    },
    Book: {
        name: 'book'
    },
    User: {
        name: 'account'
    },

}
function Tabs({ route }) {
    const { user } = route.params
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                }
            })
            }
            Options={{
                style: {
                    backgroundColor: '#FFF'
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#6E5494',
                activeBackgroundColor: '#6E5494'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ user: user }}
                options={{ headerShown: false, }}
            />
            <Tab.Screen
                name="Book"
                component={Book}
                initialParams={{ user: user }}
                options={{ headerShown: false, }}
            />
            <Tab.Screen
                name="User"
                component={User}
                initialParams={{ user: user }}
                options={{ headerShown: false, }}
            />
        </Tab.Navigator>
    )
}
export default Tabs