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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geturl: "http://192.168.0.10:3000/home"
    };
  }
  onMessage = data => {
    //Prints out data that was passed.
    // alert(data.nativeEvent.data);
    let dataOject = JSON.parse(data.nativeEvent.data);
    console.log(dataOject);
    if (dataOject.navgationFlag === 1) {
      this.props.navigation.navigate("First");
    } else if (dataOject.navgationFlag === 3) {
      this.props.navigation.navigate("Second");
    } else if (dataOject.navgationFlag === 4) {
      this.setState({
        geturl: "http://192.168.0.10:3000/home"
      });
    } else {
      this.setState({
        geturl: "http://192.168.0.10:3000/anotherPage"
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} barStyle={"light-content"} />

        <WebView
          source={{
            uri: this.state.geturl
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
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#212121"
  },
  container: {
    height: height,
    flexDirection: "column",
    backgroundColor: "#212121"
  }
});

export default Home;
