/* @flow */

import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.3, marginTop: 20 }}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>
        <View style={{ flex: 0.7, justifyContent: "center" }}>
          <Text style={styles.welcome}>
            This is a sample test!
          </Text>
        </View>

      </View>
    );
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
  }
});
