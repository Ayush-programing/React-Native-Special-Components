import { Pressable,  View, Text } from "react-native";

export default function CustomButton({ children, style, handler, textStyle }) {
  return (
    <View style={style}>
      <Pressable onPress={handler} android_ripple={{ color: "#cccccc" }}>
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
}
