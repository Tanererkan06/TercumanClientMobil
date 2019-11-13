import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class CheckBoxx extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <Icon
          name={
            this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"
          }
          onPress={this.props.onPress}
          style={styles.checkIcon}
        />
        <Text style={styles.checkLabel}>{this.props.text}</Text>
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
    borderRadius: 20
  },
  checkIcon: {
    color: "#3F51B5",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(0,0,0,0.87)",
    marginLeft: 2,
    fontSize: 16
  }
});
