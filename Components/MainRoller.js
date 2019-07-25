import React, { Component } from 'react';
import { Alert, StyleSheet, View, Keyboard } from 'react-native';
import {colors, padding, dimensions, margin} from '../Styles/base';
import { Button, TextInput  } from 'react-native-paper';

export default class MainRoller extends Component {

    constructor(props) { //even if we don't use props, it is recommended to always put it for future uses
        super(props); //call the constructor of its parent class, and puts values in this.props
        this.state = { text : ''};//set initial state
    }

    _onPressButton() {
        Alert.alert('You tapped the button!');
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    label="Enter Qty of Dice"
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    mode="contained"
                    style={styles.textinput}
                    theme={{ colors: { primary: colors.primary}}} //change the focus border color
                    multiline={true}
                    underlineColor="transparent"
                    maxLength={9}
                    keyboardType="numeric"
                />
                <Button 
                    mode="contained" 
                    onPress={this._onPressButton}
                    style={styles.btn}>
                    ROLL'EM
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: padding.xl,
        paddingBottom:padding.lg,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        height: 115,
        width: dimensions.fullWidth
    },

    textinput: {
        width: dimensions.fullWidth / 2
    },
    
    btn: {
        backgroundColor:colors.primary,
        marginLeft: margin.sm
    }
  });