import React from "react";
import { Image,ImageStyle, TextStyle, View, ViewStyle } from "react-native";
import {
  Screen,
  Text,
  TextField,
} from "../components";
import { spacing, colors } from "../theme";
import BackButton from "app/components/BackButton";

const DemoWriteReviewScreen : React.FC = ()=>{
  const product = {
    id: 1,
    name: "Calvin Clein Regular fit slim fit shirt ",
    imageUrl: "https://via.placeholder.com/200",
  };
   return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$writeReviewHeader}>
        <BackButton tintColor={colors.text} />
        <Text style={$title} size="xl" tx={"demoWriteReviewScreen.title"} />
      </View>
      <View style={$containerInformation}>
        <Image source={{uri : product.imageUrl}} style ={$image} />
        <View style={$containTitle}>
           <Text style = {$nameProduct} size="md" text={product.name}/>
        </View>
      </View>
      <TextField
            containerStyle={$textField}
            labelTx="demoWriteReviewScreen.label.headingReview"
            placeholderTx="demoWriteReviewScreen.label.headingReview"
        />
      <View style={$descriptionField}>
            <TextField
              labelTx="demoWriteReviewScreen.label.writeYourReview"
              placeholderTx="demoWriteReviewScreen.label.writeYourReview"
              multiline
            />
          </View>
    </Screen>

   );
};

export default DemoWriteReviewScreen;

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  paddingBottom: spacing.xs,
  paddingHorizontal: spacing.lg,
};
const $title: TextStyle = {
  marginLeft: spacing.md,
};
const $writeReviewHeader : ViewStyle ={
  flexDirection: "row",
};
const $containerInformation : ViewStyle = {
  paddingTop : spacing.xl,
  flexDirection : "row",
  paddingBottom : spacing.sm,
};
const $containTitle : ViewStyle = {
  flexDirection : "column",
};
const $image: ImageStyle = {
  width: spacing.xxxl+spacing.xxl,
  height: spacing.xxxl+spacing.xxl,
  borderRadius: spacing.xxs,
};
const $textField: ViewStyle = {
  marginTop : spacing.md,
  marginBottom: spacing.xxs,
  width: "100%",
};

const $descriptionField: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
};
const $nameProduct : TextStyle ={
   marginLeft: spacing.md,
   flexDirection : "row",
   flexWrap: "wrap",
   width: "100%",
};
