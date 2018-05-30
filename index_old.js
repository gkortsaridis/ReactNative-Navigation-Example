import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {DrawerNavigator, DrawerItems, StackNavigator} from 'react-navigation';

import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from "./src/ThirdScreen";


export const StackNav = StackNavigator({
    Third: { screen: ThirdScreen },
});

const CustomDrawerContentComponent = (props) => (
    <View>
        <View style={{height: 200, backgroundColor: 'red'}}>

            <Text>NAV TOP</Text>
        </View>

        <DrawerItems  {...props}/>
    </View>
);

const DrawerExample = new DrawerNavigator(
    //1) Router Configuration
    //2) DrawerNavigator Configuration
    {
        First: {
            screen: FirstScreen
        },
        Second: {
            screen: SecondScreen
        }
    },
    {
        initialRouteName: 'First',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
    }
);



AppRegistry.registerComponent('NavigDrawerExample', () => DrawerExample);