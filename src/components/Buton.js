import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;

export default class Buton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.style]}>
        <Text style={[styles.caption,this.props.text]}>{this.props.title}</Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    maxWidth:W/1.5,
    height:H/18,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#000",
    fontSize: 20,
    fontFamily: "roboto-regular"
  }
});
