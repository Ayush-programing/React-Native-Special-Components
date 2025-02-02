import { Pressable, StyleSheet, View, Text } from "react-native";

export default function CustomButton({ children, style, handler }) {
  return (
    <View style={style}>
      <Pressable onPress={handler}>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
