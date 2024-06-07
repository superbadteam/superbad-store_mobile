import React, { useState } from "react";
import { Image, ImageStyle, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, ImagePicker, Screen, Text, TextField } from "../components";
import { spacing, colors } from "../theme";
import BackButton from "app/components/BackButton";
import StarRating from "react-native-star-rating-widget";
import { notification } from "antd";
import { translate } from "../i18n";

const DemoWriteReviewScreen: React.FC = () => {
  const product = {
    id: 1,
    name: "Calvin Clein Regular fit slim fit shirt",
    imageUrl: "https://via.placeholder.com/200",
  };
  const [rating, setRating] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleSelectedImage = (uri: string) => {
    setSelectedImages([...selectedImages, uri]);
  };

  const handleDeleteImage = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    notification.success({
      message: translate("demoWriteReviewScreen.messageSubmit"),
      description: translate("demoWriteReviewScreen.descriptionSubmit"),
    });
  };

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$writeReviewHeader}>
        <BackButton tintColor={colors.text} />
        <Text style={$title} size="xl" tx={"demoWriteReviewScreen.title"} />
      </View>
      <View style={$containerInformation}>
        <Image source={{ uri: product.imageUrl }} style={$image} />
        <View style={$containTitle}>
          <Text style={$nameProduct} size="md" tx={"demoWriteReviewScreen.productName"} txOptions={{ productName: product.name }} />
          <StarRating
            rating={rating}
            onChange={setRating}
          />
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
      <View style={$uploadArea}>
        <ImagePicker type="gallery" titleTx="common.selectImage" onSelectedImage={handleSelectedImage} />
        <View style={$imageContainer}>
          {selectedImages.map((uri, index) => (
            <View key={index} style={$imageWrapper}>
              <Image source={{ uri }} style={$selectedImage} />
              <TouchableOpacity onPress={() => handleDeleteImage(index)} style={$deleteButton}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <Button
        style={$submit}
        textStyle={$submitText}
        tx="demoWriteReviewScreen.submit"
        onPress={handleSubmit}
      />
    </Screen>
  );
};

export default DemoWriteReviewScreen;

const $container: ViewStyle = {
  paddingTop: spacing.sm,
  paddingBottom: spacing.xs,
  paddingHorizontal: spacing.lg,
};
const $title: TextStyle = {
  marginLeft: spacing.md,
};
const $writeReviewHeader: ViewStyle = {
  flexDirection: "row",
};
const $containerInformation: ViewStyle = {
  paddingTop: spacing.lg,
  flexDirection: "row",
  paddingBottom: spacing.sm,
};
const $containTitle: ViewStyle = {
  flexDirection: "column",
  flexShrink: 1,
};
const $image: ImageStyle = {
  width: spacing.xxxl + spacing.lg,
  height: spacing.xxxl + spacing.lg,
  borderRadius: spacing.xxs,
};
const $textField: ViewStyle = {
  marginTop: spacing.md,
  marginBottom: spacing.xxs,
  width: "100%",
};
const $descriptionField: ViewStyle = {
  marginTop: spacing.sm,
  width: "100%",
};
const $nameProduct: TextStyle = {
  marginLeft: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
};
const $uploadArea: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  marginTop: spacing.lg,
  marginBottom : spacing.lg,
};
const $submitText: TextStyle = {
  color: colors.palette.neutral100,
};
const $submit: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
  backgroundColor: "rgb(102 125 255)",
};
const $imageContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: spacing.md,
};
const $imageWrapper: ViewStyle = {
  position: "relative",
  marginRight: spacing.md,
  marginBottom: spacing.md,
  flexBasis: "28%", 
  maxWidth: "30%", 
  alignItems: "center",
};
const $selectedImage: ImageStyle = {
  width: "100%", 
  aspectRatio: 1, 
  borderRadius: spacing.xxs,
};
const $deleteButton: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: spacing.xxs,
  padding: spacing.xxs,
};
