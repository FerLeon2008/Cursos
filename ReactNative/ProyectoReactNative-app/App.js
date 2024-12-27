import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{
          width: 100,
          height: 100,U
          resizeMode: "center",
        }}
      />
      <Text style={{ color: "#fff" }}>Aquí va mi app!!</Text>
      <StatusBar style="light" />
      <Button title="Push here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
