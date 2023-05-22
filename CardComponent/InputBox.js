import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function InputBox() {
  const [textLength, setLength] = useState(0);

  return (
    <View style={styles.textInputBox}>
      <TextInput
        placeholder="Type Your Response"
        multiline
        onChangeText={(value) => {
          setLength(value.length);
        }}
        maxLength={100}
        style={{ flex: 1, fontSize: 16 }}
        autoCapitalize="none"
      ></TextInput>
      <Text style={styles.charactersCount}>Characters: {textLength}/100</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputBox: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 3,
    borderRadius: 5,
    height: 200,
    paddingLeft: 5,
  },

  charactersCount: {
    fontWeight: "900",
    textAlign: "right",
    marginTop: "auto",
  },
});
