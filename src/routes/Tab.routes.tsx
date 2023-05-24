import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Basket from "../screens/Basket";
import Explore from "../screens/Explore";
import Home from "../screens/Home";
import WishList from "../screens/WishList";

export function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0A1D2C",
          borderTopWidth: 0,
          height: 50,
        },
        tabBarActiveTintColor: "#a167a5",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />

      <Screen
        name="explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="favorites"
        component={WishList}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />

      <Screen
        name="basket"
        component={Basket}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-basket" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
