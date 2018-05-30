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

export default class SecondScreen extends React.Component {

    constructor(props){
        super(props)

    }


    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Screen 2</Text>
                <Button
                    onPress={() => {this.props.navigation.openDrawer(); }}
                    title="Open Navigator Drawer"
                />
            </View>
        );
    }
}