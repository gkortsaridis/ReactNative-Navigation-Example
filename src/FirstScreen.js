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

export default class FirstScreen extends React.Component {


    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Screen 1</Text>
                <Button
                    onPress={() => {console.log(this.props); this.props.navigation.openDrawer(); }}
                    title="Open Navigator Drawer"
                />

                <Button
                    onPress={() => {
                        console.log(this.props);
                        this.props.navigation.navigate('Third')
                    }}
                    title="Push"
                />
            </View>
        );
    }
}