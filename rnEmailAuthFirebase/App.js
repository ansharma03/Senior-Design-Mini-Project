/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import AddDataScreen from "./pages/AddDataScreen";
import ViewDataScreen from "./pages/ViewDataScreen";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home", //Set Header Title
            headerStyle: {
              backgroundColor: "#307ecc", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
          <Stack.Screen
              name="AddDataScreen"
              component={AddDataScreen}
              options={{
                title: "Add Data", //Set Header Title
                headerStyle: {
                  backgroundColor: "#307ecc", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
          <Stack.Screen
              name="ViewDataScreen"
              component={ViewDataScreen}
              options={{
                headerStyle: {
                  backgroundColor: "#307ecc", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
