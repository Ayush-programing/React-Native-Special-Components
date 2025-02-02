import { Pressable, StyleSheet, View, Text } from "react-native";

export default function CustomButton({ children, style, handler, textStyle }) {
  return (
    <View style={style}>
      <Pressable onPress={handler}>
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
}
