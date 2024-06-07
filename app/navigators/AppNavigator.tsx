/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React from "react";
import { useColorScheme } from "react-native";
import * as Screens from "app/screens";
import ProductDetailScreen from "app/screens/ProductDetailScreen/ProductDetailScreen";
import Config from "../config";
import { useStores } from "../models";
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator";
import { navigationRef, useBackButtonHandler } from "./navigationUtilities";
import { colors } from "app/theme";
import DemoCartScreen from "app/screens/DemoCartScreen";
import FilterProductsScreen from "app/screens/FilterProductsScreen/FilterProductsScreen";
import DemoWriteReviewScreen from "app/screens/DemoWriteReviewScreen";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Demo: NavigatorScreenParams<DemoTabParamList>;
  ProductDetailScreen : undefined;
  CartScreen : undefined;
  FilterProductsScreen : undefined;
  WriteReviewScreen : undefined;
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
};

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes;

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      initialRouteName={isAuthenticated ? "Welcome" : "Login"}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
          <Stack.Screen name="Demo" component={DemoNavigator} />
          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
          <Stack.Screen name="CartScreen" component={DemoCartScreen}/>
          <Stack.Screen name="FilterProductsScreen"component={FilterProductsScreen}/>
          <Stack.Screen name="WriteReviewScreen" component={DemoWriteReviewScreen}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Screens.LoginScreen} />
          <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
        </>
      )}

      {/** 🔥 Your screens go here */}
      {/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  );
});

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme();

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName));

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  );
});
