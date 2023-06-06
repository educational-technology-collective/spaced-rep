import { View, Text, StyleSheet } from "react-native";
import ProfileBar from "../ProfileComp/ProfileBar";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePic from "../ProfileComp/ProfilePic";
import ProfileName from "../ProfileComp/ProfileName";

export default function ProfileScreen() {
  return (
    <LinearGradient
      style={styles.overall}
      colors={["#0056D2", "white", "white", "white", "#0056D2"]}
    >
      <View style={styles.top}>
        <ProfileBar />
      </View>

      <View style={styles.profilePic}>
        <ProfilePic />
      </View>

      <View style={styles.profileName}>
        <ProfileName />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    backgroundColor: "#0056D2",
  },

  profilePic: {
    flex: 2,
  },

  profileName: {
    flex: 2,
  },
});
