import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
 
import TextInputMask from 'react-native-text-input-mask';

export default class InpuMask extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}> 
        <TextInputMask 
        placeholder={this.props.placeholder} 
        style={styles.inputStyle} 
        onChangeText={this.props.onChangeText}
        returnKeyType={this.props.returnKeyType} 
        keyboardType={this.props.keyboardType}
        mask={this.props.mask}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    margin:5,
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 0.8,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
