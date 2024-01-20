import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from '@rneui/themed';
import Home from '../home';
import HomeNavigation from './homeNavigation';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notifications from '../notification/nitification';
import Profile from '../profile';
import Control from '../control';
import ControlNavigation from './ControlNavigation';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (

        <>

            <Tab.Navigator
                initialRouteName="HomeNavigation"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeNavigation}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarLabel: 'Updates',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size} />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="ControlNavigation"
                    component={ControlNavigation}
                    options={{
                        tabBarLabel: 'ControlNavigation',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="tools" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default MyTabs;