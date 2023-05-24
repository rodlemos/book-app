import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./Stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
