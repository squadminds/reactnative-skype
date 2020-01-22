import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Text
} from "react-native";

export default class App extends Component {
  state = {
    message: []
  };

  handleEmail = text => {
    this.setState({ message: text });
  };

  handleOnPress() {}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.row}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter a message"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <Button
            onPress={() => <Text>{this.state.message}</Text>}
            title="Send"
          ></Button>
          <View>
            <Text style>{this.state.message}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: "grey",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20
  },

  inputField: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
