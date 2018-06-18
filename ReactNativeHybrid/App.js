/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";

import Home from "./src/view/Home";
import First from "./src/view/First";
import Second from "./src/view/Second";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
export const Tab = TabNavigator(
  {
    Home: {
      screen: Home
    },
    First: {
      screen: First
    },
    Second: {
      screen: Second
    }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#f2f2f2",
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: "#666",
      labelStyle: {
        fontSize: 22,
        padding: 12
      }
    }
  }
);

export default class App extends Component<> {
  componentDidMount() {
    // eslint-disable-next-line
    console.disableYellowBox = true; // eslint-disable-line no-alert
  }
  render() {
    return <Tab />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
