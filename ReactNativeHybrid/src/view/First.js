import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  WebView,
  Platform,
  View,
  Dimensions
} from "react-native";
const height = Dimensions.get("window").height;
class First extends Component {
  onMessage = data => {
    //Prints out data that was passed.
    alert(data.nativeEvent.data);
    console.log(data.nativeEvent.data);
    this.props.navigation.navigate("Second");
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} barStyle={"light-content"} />

        <WebView
          source={{
            uri: "http://192.168.0.10:3000/firstPage"
          }}
          style={{
            marginTop: Platform.OS === "ios" ? 20 : 0
          }}
          onMessage={m => this.onMessage(m)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 300
  },
  container: {
    height: height,
    flexDirection: "column",
    backgroundColor: "#212121"
  }
});

export default First;
