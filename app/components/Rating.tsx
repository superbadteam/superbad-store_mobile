import React from "react";
import { View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { Text } from "app/components";
import { colors, spacing } from "app/theme";
import { Ionicons } from "@expo/vector-icons";

interface SlideShowProps {
  images: string[];
}

const Rating: React.FC<SlideShowProps> = () => {
  return (
    <View style={$container}>
      <View style={$reviewHeader}>
        <Text tx="listReview.title" style={$reviewHeaderTitle} />
        <View style={$header}>
          <View style={$headerLeft}>
            <View style={$rating}>
              <Text style={$realRating}>4.8</Text>
              <Text style={$totalRating}>/5</Text>
            </View>
            <View style={$overalRating}>
              <Text style={$overal} tx="listReview.overal" />
              <Text style={$quantityRating}>574 Ratings</Text>
            </View>
          </View>
          <TouchableOpacity style={[$button, $addToCartButton]}>
            <Text style={[$buttonText, { color: colors.blue }]} tx="listReview.rateBtn" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={$reviewContainer}>
        <View style={$reviewStar}>
          <Ionicons name="star" size={20} color={colors.palette.yellow500} />
          <Ionicons name="star" size={20} color={colors.palette.yellow500} />
          <Ionicons name="star" size={20} color={colors.palette.yellow500} />
          <Ionicons name="star" size={20} color={colors.palette.yellow500} />
          <Ionicons name="star" size={20} color={colors.palette.yellow500} />
        </View>

        <Text weight="bold" size="xl">
          Amazing
        </Text>
        <Text>
          An amazing fit. i am somewhere around 6ft and ordered 40 size. It's a perfect fit and
          quality is worth
        </Text>
        <Text style={$reviewDate}>TrungDOng, 31th Jan 2024</Text>
      </View>
      <View style={$reviewSeeAll}>
        <Text size="sm" style={$seeAllText}>
          View All 64 Reviews
        </Text>
        <Ionicons name="chevron-forward-outline" size={20} color="blue" />
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  //   height: 300,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  marginVertical: 16,
  borderRadius: 8,
};

const $button: TextStyle = {
  alignItems: "center",
  borderRadius: 8,
  justifyContent: "center",
  marginHorizontal: 5,
  paddingVertical: 15,
  width: 120,
};
const $buttonText: TextStyle = {
  fontWeight: "bold",
  fontSize: 18,
};
const $addToCartButton: TextStyle = {
  backgroundColor: colors.white,
  borderColor: colors.blue,
  borderWidth: 2,
};
const $reviewHeader: ViewStyle = {
  borderRadius: 8,
  backgroundColor: colors.white,
};
const $reviewHeaderTitle: TextStyle = {
  paddingVertical: 16,
  fontSize: 16,
  fontWeight: "bold",
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral300,
  paddingHorizontal: 12,
};
const $header: ViewStyle = {
  padding: 12,
  flexDirection: "row",
};
const $headerLeft: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
};
const $rating: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
};
const $realRating: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
};
const $totalRating: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 16,
};
const $overalRating: ViewStyle = {};
const $overal: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.palette.neutral600,
};
const $quantityRating: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral600,
};

const $reviewContainer: TextStyle = {
  marginHorizontal: 12,
};

const $reviewDate: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral700,
  paddingBottom: 16,
  paddingTop: 8,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral300,
};

const $reviewSeeAll: TextStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 16,
  paddingHorizontal: 12,
};

const $seeAllText: TextStyle = {
  color: colors.theme,
};

const $reviewStar: ViewStyle = {
  flexDirection: "row",
  gap: spacing.xs,
};

export default Rating;
