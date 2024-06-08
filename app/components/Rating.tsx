import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { Text } from "app/components";
import { colors, spacing } from "app/theme";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";
import type { Review } from "app/types";
import { api } from "../services/api";

export interface RatingProps {
  productId: string;
}


const Rating: React.FC<RatingProps> = ({productId}) => {
  const navigation = useNavigation<any>();
  const handleRate = () => {
    navigation.navigate("WriteReviewScreen");
  };
  const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await api.getReviews(productId);
          console.log(response.data, "API Response"); // Log response data
          setReviews(response.data);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
      console.log(reviews, "check review");
      fetchReviews();
    }, [productId]);
  const averageRating = reviews.length > 0
  ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  : 0;

  const [setRating] = useState(0);
  return (
    <View style={$container}>
      <View style={$reviewHeader}>
        <Text tx="listReview.title" style={$reviewHeaderTitle} />
        <View style={$header}>
          <View style={$headerLeft}>
            <View style={$rating}>
              <Text style={$realRating}>{averageRating}</Text>
              <Text style={$totalRating}>/5</Text>
            </View>
            <View style={$overalRating}>
              <Text style={$overal} tx="listReview.overal" />
              <Text style={$quantityRating}>{ reviews.length } Ratings</Text>
            </View>
          </View>
          <TouchableOpacity style={[$button, $addToCartButton]} onPress = {handleRate}>
            <Text style={[$buttonText, { color: colors.blue }]} tx="listReview.rateBtn" />
          </TouchableOpacity>
        </View>
      </View>
      {reviews.map((review, index) => (
        <View key={index} style={$reviewContainer}>
          <View style={$reviewStar}>
            <StarRating rating={review.rating} onChange={setRating} />
          </View>
          <Text>{review.content}</Text>
          <Text style={$reviewDate}>{review.reviewer.name}, {new Date(review.createdAt).toLocaleDateString()}</Text>
        </View>
    ))}

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
  marginTop: spacing.xxs,
};


export default Rating;
