import React, {useState} from "react";
import { View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { Text } from "app/components";
import { colors, spacing } from "app/theme";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

interface RatingProps {}


const Rating: React.FC<RatingProps> = () => {
  const navigation = useNavigation<any>();
  const handleRate = () => {
    navigation.navigate("WriteReviewScreen");
  };

  const rating = 3.5;
  const ratingSecond = 4;
  const [setRating] = useState(0);
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
              <Text style={$quantityRating}>3 Ratings</Text>
            </View>
          </View>
          <TouchableOpacity style={[$button, $addToCartButton]} onPress = {handleRate}>
            <Text style={[$buttonText, { color: colors.blue }]} tx="listReview.rateBtn" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={$reviewContainer}>
        <View style={$reviewStar}>
          <StarRating
            rating={rating}
            onChange={setRating}
          />
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
      <View style={$reviewContainer}>
        <View style={$reviewStarSecond}>
          <StarRating
            rating={ratingSecond}
            onChange={setRating}
          />
        </View>

        <Text weight="bold" size="xl">
          Wonderful
        </Text>
        <Text>
        I was pleasantly surprised by how well this fits. Being about 6 feet tall, I chose a size 40 and it suits me perfectly. The craftsmanship and quality are impressive and definitely justify the cost.
        </Text>
        <Text style={$reviewDate}>HiNam, 3th Feb 2024</Text>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  shadowColor: colors.palette.neutral900,
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

const $reviewStar: ViewStyle = {
  flexDirection: "row",
  gap: spacing.xs,
};

const $reviewStarSecond: ViewStyle = {
  marginTop: spacing.xs,
};

export default Rating;
