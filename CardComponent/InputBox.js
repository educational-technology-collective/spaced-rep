import { View, Text, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView } from "react-native";
import { useState } from "react";

//Component For the TextInput box for QA or QAImg cards
export default function InputBox() {
  const [textLength, setLength] = useState(0);

  return (
    <KeyboardAvoidingView style={{flex: 2}}>
    <View
      style={styles.textInputBox}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <TextInput
        placeholder="Type Your Response"
        multiline={true}
        onChangeText={(value) => {
          setLength(value.length);
        }}
        maxLength={100}
        style={{ flex: 1, fontSize: 16 }}
        autoCapitalize="none"
      ></TextInput>
      <Text style={styles.charactersCount}>Characters: {textLength}/100</Text>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInputBox: {
    flex: 1,
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
