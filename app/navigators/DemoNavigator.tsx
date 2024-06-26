import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { translate } from "../i18n";
import {
  DemoHomePageScreen,
  DemoCreateProductScreen,
} from "../screens";
import { Ionicons } from "@expo/vector-icons";
import DemoCartScreen from "../screens/DemoCartScreen";
import { colors, spacing, typography } from "../theme";
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator";
import ProductDetailScreen from "app/screens/ProductDetailScreen/ProductDetailScreen";

export type DemoTabParamList = {
  DemoHomePage: { queryIndex?: string; itemIndex?: string };
  DemoDebug: undefined;
  DemoCartList: undefined;
  DemoCreateProduct: undefined;
  ProductDetail: { id?: string };
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<DemoTabParamList>();

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="DemoHomePage"
        component={DemoHomePageScreen}
        options={{
          tabBarLabel: translate("demoHomePageScreen.home"),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="DemoCartList"
        component={DemoCartScreen}
        options={{
          tabBarAccessibilityLabel: translate("demoNavigator.cartListTab"),
          tabBarLabel: translate("demoNavigator.cartListTab"),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="cart" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="DemoCreateProduct"
        component={DemoCreateProductScreen}
        options={{
          tabBarLabel: translate("DemoCreateProductScreen.create"),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="create-sharp" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          tabBarLabel: translate("productDetailScreen.productDetail"),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="bag" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
};

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
};

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
};
