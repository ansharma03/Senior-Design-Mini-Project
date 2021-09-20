import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

import auth from "@react-native-firebase/auth";

const SplashScreen = ({ navigation }) => {
    
  useEffect(() => {
    setTimeout(() => {
      // Check if currentUser is set or not
      // If not then send for Authentication
      // else send to Home Screen
      navigation.replace(
        auth().currentUser ? "HomeScreen" : "Auth"
      );
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#307ecc" }}
    >
      <View style={styles.container}>
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "white",
        }}
      >
        Senior Design MiniProject
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});

