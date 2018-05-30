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

export default class ThirdScreen extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Screen 3</Text>

            </View>
        );
    }
}