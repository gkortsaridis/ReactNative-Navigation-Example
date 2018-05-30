import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation'

export default class NavDrawerContent extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return (
                <View style={{height: 200, backgroundColor: 'red'}}>
                    <Text>NAV TOP</Text>
                </View>
        );
    }
}