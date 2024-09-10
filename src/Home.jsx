import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingColor}>Welcome To Movie App</Text>
      <View style={styles.BtnStyle}>
        <Button
          color={"green"}
          title="Explore Movies"
          onPress={() => navigation.navigate("Movies")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0000000",
  },
  HeadingColor: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BtnStyle: {
    width: "60%",
    marginTop: 5,
    padding: 5,
    fontSize: 20,
  },
});
