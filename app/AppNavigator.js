// import LoginScreen from "./LoginScreen";
// import emailValidator from "./helpers/emailValidator";
// import passwordValidator from "./helpers/passwordValidator";
// export default LoginScreen;
// export { emailValidator, passwordValidator };
//# sourceMappingURL=index.js.map

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import GameMenu from "./GameMenu";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="GameMenu"
        component={GameMenu}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;