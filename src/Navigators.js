import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// Navigators
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation'
import NavDrawerContent from './NavDrawerContent';

// StackNavigator screens
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const CustomDrawerContentComponent = (props) => (
    <View>
        <NavDrawerContent/>

        <DrawerItems  {...props}/>
    </View>
);

export const Stack1 = StackNavigator({
    First: { screen: FirstScreen },
    Third: { screen: ThirdScreen}
    }, {
    initialRouteName: 'First',
    headerMode: 'none',
    navigationOptions: { headerVisible: false }
    })

export const Stack2 = StackNavigator({
    Second: { screen: SecondScreen },
    }, {
    initialRouteName: 'Second',
    headerMode: 'none',
    navigationOptions: { headerVisible: false }
    })

export const Drawer = DrawerNavigator({
        Stack1: { screen: Stack1, },
        Stack2: { screen: Stack2 }
    },
    {
        initialRouteName: 'Stack1',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
    })


Stack1.navigationOptions = {
    tabBarLabel: 'STACK',
    drawerIcon: () => {
        return(
            <Image source={require('../resources/a.png')} style={{width: 25, height: 25}}/>
        );
    }
}

Stack2.navigationOptions = {
    tabBarLabel: 'STACK 2',
    drawerIcon: () => {
        return(
            <Image source={require('../resources/a.png')} style={{width: 25, height: 25}}/>
        );
    }
}

