import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const IdkLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default IdkLayout
