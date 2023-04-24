import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

const index = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
};

export default index;
