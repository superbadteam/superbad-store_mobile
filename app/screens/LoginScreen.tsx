import { observer } from "mobx-react-lite";
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components";
import { useStores } from "../models";
import { AppStackScreenProps } from "../navigators";
import { colors, spacing } from "../theme";
import { useLogin } from "../services/hooks";

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>(null);
  const { loginByEmail, isMutating } = useLogin();
  const [authPassword, setAuthPassword] = useState("");
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const {
    authenticationStore: { authEmail, setAuthEmail },
  } = useStores();

  useEffect(() => {
    setAuthEmail("user@123");
    setAuthPassword("User@123");

    return () => {
      setAuthPassword("");
      setAuthEmail("");
    };
  }, []);

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        );
      },
    [isAuthPasswordHidden],
  );

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Text
        testID="login-heading"
        tx="loginScreen.loginWithEmail"
        preset="heading"
        style={$login}
        size="xl"
        weight="bold"
      />
      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="loginScreen.emailFieldLabel"
        placeholderTx="loginScreen.emailFieldPlaceholder"
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="loginScreen.passwordFieldLabel"
        placeholderTx="loginScreen.passwordFieldPlaceholder"
        onSubmitEditing={() => loginByEmail({ email: authEmail, password: authPassword })}
        RightAccessory={PasswordRightAccessory}
      />

      <Text tx="loginScreen.forgotPassword" size="sm" style={$link} weight="bold" />

      <Button
        testID="login-button"
        tx="loginScreen.login"
        style={$tapButton}
        preset="reversed"
        onPress={() => loginByEmail({ email: authEmail, password: authPassword })}
        disabled={isMutating}
      />
    </Screen>
  );
});

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
};

const $login: TextStyle = {
  marginBottom: spacing.lg,
};

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
};

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.theme,
};

const $link: TextStyle = {
  color: colors.theme,
  marginTop: -spacing.md,
  marginBottom: spacing.md,
  alignSelf: "flex-end",
};
