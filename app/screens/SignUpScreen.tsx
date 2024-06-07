import { observer } from "mobx-react-lite";
import React, { ComponentType, FC, useMemo, useRef, useState } from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components";
import { useStores } from "../models";
import { AppStackScreenProps } from "../navigators";
import { colors, spacing } from "../theme";
import { useRegister } from "app/services/hooks/useRegister";

interface SignUpScreenProps extends AppStackScreenProps<"SignUp"> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen({ navigation }) {
  const authPasswordInput = useRef<TextInput>(null);
  const authPasswordInputConfirm = useRef<TextInput>(null);
  const nameInput = useRef<TextInput>(null);
  const { signUpByEmail, isMutating } = useRegister();
  const [name, setName] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authPasswordConfirm, setAuthPasswordConfirm] = useState("");
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const {
    authenticationStore: { authEmail, setAuthEmail },
  } = useStores();

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

  const handleSignUp = () => {
    signUpByEmail(
      { name, email: authEmail, password: authPassword, confirmPassword: authPasswordConfirm },
      {
        onSuccess: () => {
          navigation.navigate("Login");
        },
      },
    );
  };

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Text
        testID="signUp-heading"
        tx="signUp.signUpWithEmail"
        preset="heading"
        style={$signUp}
        size="xl"
        weight="bold"
      />

      <TextField
        ref={nameInput}
        value={name}
        onChangeText={setName}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="name"
        autoCorrect={false}
        labelTx="signUp.nameFieldLabel"
        placeholderTx="signUp.nameFieldPlaceholder"
      />
      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="signUp.emailFieldLabel"
        placeholderTx="signUp.emailFieldPlaceholder"
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
        labelTx="signUp.passwordFieldLabel"
        placeholderTx="signUp.passwordFieldPlaceholder"
        RightAccessory={PasswordRightAccessory}
      />

      <TextField
        ref={authPasswordInputConfirm}
        value={authPasswordConfirm}
        onChangeText={setAuthPasswordConfirm}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="signUp.passwordConfirmFieldLabel"
        placeholderTx="signUp.passwordConfirmFieldPlaceholder"
        onSubmitEditing={handleSignUp}
        RightAccessory={PasswordRightAccessory}
      />

      <Button
        testID="signUp-button"
        tx="signUp.signUp"
        style={$tapButton}
        preset="reversed"
        onPress={handleSignUp}
        disabled={isMutating}
      />
    </Screen>
  );
});

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
};

const $signUp: TextStyle = {
  marginBottom: spacing.lg,
};

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
};

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.theme,
};
