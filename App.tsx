import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import swellJS from "swell-js";
import buffer from "buffer";
import React from "react";

global.Buffer = buffer.Buffer;

const STORE_ID = "";
const PUBLIC_ID = "";
swellJS.init(STORE_ID, PUBLIC_ID);

export default function App() {
  React.useEffect(() => {
    const fn = async () => {
      console.log(await swellJS.cart.get());
    };
    fn();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
